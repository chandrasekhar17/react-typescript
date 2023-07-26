import { useState } from "react";
import "./App.css";
import { RoutePaths } from "./Routepaths";
import { API } from "./components/Api/API";
import { Array } from "./components/arrays/Array";
import { Login } from "./components/login/Login";
import { Hooks } from "./components/hooks/Hooks";
import { Objects } from "../src/components/objects/Objects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { Home } from "./Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={RoutePaths.login}
          element={<Login name="Chandu" isLoggedIn={true} />}
        >
          {/* <Route path={`:id`} element={<API status="fail" />}></Route>
          <Route
            path={`:Infoid`}
            element={<Array profInfo={arrayObj} />}
          ></Route>
          <Route path={`:Hooksid`} element={<Hooks />}></Route>
          <Route
            path={`:Objectsid`}
            element={<Objects info={objects} />}
          ></Route> */}

          <Route path=":id" element={<DynamicComponent />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

const DynamicComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  if (id === "1") {
    return <API status="fail" />;
  } else if (id === "2") {
    return <Array profInfo={arrayObj} />;
  } else if (id === "3") {
    return <Hooks />;
  } else if (id === "4") {
    return <Objects info={objects} />;
  } else {
    return <div>Invalid ID</div>;
  }
};

export default App;
