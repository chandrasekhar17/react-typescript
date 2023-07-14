import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../Routepaths";

type personInfo = {
  info: {
    name: string;
    age: number;
  };
};

export const Objects = (props: personInfo) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(RoutePaths.API);
  };
  return (
    <>
      <div>
        {" "}
        Hi {props.info.name}, you're {props.info.age} years old
        <button onClick={handleButton}>Go to Api page</button>
      </div>
    </>
  );
};
