import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../Routepaths";
type AuthUser = {
  name: string;
  email: string;
};
export const Hooks = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser({
      name: "chandu",
      email: "somayajula.sekhar@triconinfotech.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
    navigate(RoutePaths.login);
  };
  return (
    <>
      <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log out</button> <br />
        logged in user name is {user?.name}, email is {user?.email}
        <button onClick={() => navigate(-1)}> Go back</button>
      </div>
    </>
  );
};
