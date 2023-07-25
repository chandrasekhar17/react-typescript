import { Link } from "react-router-dom";
import { RoutePaths } from "./Routepaths";

export const Home = () => {
  return (
    <>
      <h1>This is Home page </h1>
      <Link to="/login">Click Here </Link>
    </>
  );
};
