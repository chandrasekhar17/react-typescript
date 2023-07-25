import { useState } from "react";
import "./App.css";
import { RoutePaths } from "./Routepaths";
import { API } from "./components/Api/API";
import { Array } from "./components/arrays/Array";
import { Login } from "./components/login/Login";
import { Hooks } from "./components/hooks/Hooks";
import { Objects } from "../src/components/objects/Objects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
function App() {
  interface arrayObjInterface {
    name: string;
    salary: number;
  }
  const objects = {
    name: "Sekhar",
    age: 20,
  };

  const arrayObj: arrayObjInterface[] = [
    {
      name: "Chandu",
      salary: 23900,
    },
    {
      name: "Xavier",
      salary: 32333,
    },
    {
      name: "Benjamin",
      salary: 38900,
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={RoutePaths.login}
          element={<Login name="Chandu" isLoggedIn={true} />}
        >
          <Route path={RoutePaths.API} element={<API status="fail" />}></Route>
          <Route
            path={RoutePaths.Arrays}
            element={<Array profInfo={arrayObj} />}
          ></Route>
          <Route path={RoutePaths.Hooks} element={<Hooks />}></Route>
          <Route
            path={RoutePaths.Objects}
            element={<Objects info={objects} />}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
