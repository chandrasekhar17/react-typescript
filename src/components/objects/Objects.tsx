import { useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";

type personInfo = {
  info: {
    name: string;
    age: number;
  };
};

type validType = "1" | "2" | "3" | "4";

export const Objects = (props: personInfo) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: validType }>();

  const handleButton = () => {
    navigate(`${RoutePaths.login}/${id ? id : ""}`);
  };

  return (
    <>
      <div>
        {" "}
        Hi {props.info.name}, you're {props.info.age} years old
        {/* <button onClick={handleButton}>Go to Api page</button>
        <button onClick={() => navigate(-1)}> Go back</button> */}
      </div>
    </>
  );
};
