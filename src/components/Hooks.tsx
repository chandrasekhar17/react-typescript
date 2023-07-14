import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const Hooks = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "chandu",
      email: "somayajula.sekhar@triconinfotech.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log out</button> <br />
        logged in user name is {user?.name}, email is {user?.email}
      </div>
    </>
  );
};
