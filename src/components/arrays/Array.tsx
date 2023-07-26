import { useNavigate, useParams } from "react-router-dom";
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
  type validType = "1" | "2" | "3" | "4";
  const { id } = useParams<{ id: validType }>();
  const handleButton = () => {
    navigate(`${RoutePaths.login}/${id ? id : ""}`);
  };
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
      {/* <button onClick={handleButton}>Go to Obj page</button>
      <button onClick={() => navigate(-1)}> Go back</button> */}
    </>
  );
};
