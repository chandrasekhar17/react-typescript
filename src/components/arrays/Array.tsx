import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";
import { useEffect } from "react";

type info = {
  profInfo: {
    name: string;
    salary: number;
  }[];
};

export const Array = (props: info) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(RoutePaths.Objects);
  };
  useEffect(() => {
    console.log("came to this route");
  }, []);
  return (
    <>
      {props.profInfo.map((record) => {
        return (
          <div>
            <ol>
              {record.name} {record.salary}
            </ol>
          </div>
        );
      })}
      <button onClick={handleButton}>Go to Obj page</button>
      <button onClick={() => navigate(-1)}> Go back</button>
    </>
  );
};
