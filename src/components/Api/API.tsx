import { useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";

type statusProps = {
  status: "fail" | "success" | "fetching";
};

type validType = "1" | "2" | "3" | "4";

export const API = (props: statusProps) => {
  let message: string = "";
  const navigate = useNavigate();
  const { id } = useParams<{ id: validType }>();

  // const handleButton = () => {
  //   navigate(RoutePaths.Hooks);
  // };
  function handleButton(): void {
    navigate(`${RoutePaths.login}/${id ? id : ""}`);
  }
  if (props.status === "fetching") {
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
        {/* <button onClick={handleButton}>Go to Hooks page</button>
        <button onClick={() => navigate(-1)}> Go back</button> */}
      </div>
    </>
  );
};
