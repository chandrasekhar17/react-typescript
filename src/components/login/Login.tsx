import { Outlet, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";
import { useEffect } from "react";

type IProps = {
  name: string;
  isLoggedIn: boolean;
};

export const Login = (props: IProps) => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate(RoutePaths.Arrays);
  };
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>Hello {props.name}, Hope you're having a good day </h1>
      ) : (
        <h1>Welcome Stranger</h1>
      )}
      <button onClick={handlePage}>Go to Arrays Page</button>
      <Outlet />
    </div>
  );
};
