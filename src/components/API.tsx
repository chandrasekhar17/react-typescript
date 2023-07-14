import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../Routepaths";

type statusProps = {
  status: string;
};

export const API = (props: statusProps) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(RoutePaths.Hooks);
  };
  let message;
  if (props.status === "loading") {
    message = "Data is being loaded";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "fail") {
    message = "error while fetching data";
  }
  return (
    <>
      <div>
        <h2>status - {message}</h2>
        <button onClick={handleButton}>Go to Hooks page</button>
      </div>
    </>
  );
};
