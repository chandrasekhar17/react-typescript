import { Outlet, useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";
import { useEffect } from "react";
import { API } from "../Api/API";
import { Hooks } from "../hooks/Hooks";
import { Array } from "../arrays/Array";
import { Objects } from "../objects/Objects";

type IProps = {
  name: string;
  isLoggedIn: boolean;
};

type validType = "apis/1" | "hooks/2" | "arrays/3" | "objects/4";

export const Login = (props: IProps) => {
  // interface arrayObjInterface {
  //   name: string;
  //   salary: number;
  // }
  // const objects = {
  //   name: "Sekhar",
  //   age: 20,
  // };

  // const arrayObj: arrayObjInterface[] = [
  //   {
  //     name: "Chandu",
  //     salary: 23900,
  //   },
  //   {
  //     name: "Xavier",
  //     salary: 32333,
  //   },
  //   {
  //     name: "Benjamin",
  //     salary: 38900,
  //   },
  // ];
  // type ComponentMapping = {
  //   api: React.FC<{ status: string }>;
  //   arrays: React.FC<{ profInfo: arrayObjInterface[] }>;
  //   hooks: React.FC;
  //   objects: React.FC<{ info: Object }>;
  // };

  const navigate = useNavigate();
  // let { id } = useParams<{ id: validType }>();
  const { id } = useParams();

  const handlePage = () => {
    navigate(`${RoutePaths.login}/${id ? id : ""}`);
  };
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>Hello {props.name}, Hope you're having a good day </h1>
      ) : (
        <h1>Welcome Stranger</h1>
      )}
      {/* <button onClick={handlePage}>Go to APIs Page</button>
      {id === "1" && <API status="fail" />}
      {id === "2" && <Hooks />}
      {id === "3" && <Array profInfo={arrayObj} />}
      {id === "4" && <Objects info={objects} />} */}
      <Outlet />
    </div>
  );
};
