import "./App.css";
import { RoutePaths } from "./Routepaths";
import { API } from "./components/API";
import { Array } from "./components/Array";
import { Greet } from "./components/Greet";
import { Hooks } from "./components/Hooks";
import { Objects } from "./components/Objects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const objects = {
    name: "Sekhar",
    age: 20,
  };
  const arrayObj = [
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
      <div>
        <Routes>
          <Route path="/" element={<Greet name="Chandu" isLoggedIn={true} />} />
          <Route path={RoutePaths.API} element={<API status="fail" />} />
          <Route
            path={RoutePaths.Arrays}
            element={<Array profInfo={arrayObj} />}
          />
          <Route path={RoutePaths.Hooks} element={<Hooks />} />
          <Route
            path={RoutePaths.Objects}
            element={<Objects info={objects} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
