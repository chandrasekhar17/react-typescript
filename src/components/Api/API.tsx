import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";

type statusProps = {
  status: string;
};

export const API = (props: statusProps) => {
  let message: string = "";
  const navigate = useNavigate();
  // const handleButton = () => {
  //   navigate(RoutePaths.Hooks);
  // };
  function handleButton(): void {
    navigate(RoutePaths.Hooks);
  }
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
        <button onClick={() => navigate(-1)}> Go back</button>
      </div>
    </>
  );
};
