import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";
type AuthUser = {
  name: string;
  email: string;
};

type validType = "1" | "2" | "3" | "4";

export const Hooks = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: validType }>();
  const handleLogin = () => {
    setUser({
      name: "chandu",
      email: "somayajula.sekhar@triconinfotech.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
    navigate(`${RoutePaths.login}`);
  };
  return (
    <>
      <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log out</button> <br />
        logged in user name is {user?.name}, email is {user?.email}
        {/* <button onClick={() => navigate(-1)}> Go back</button> */}
      </div>
    </>
  );
};
