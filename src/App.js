import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Home from "./pages/Home/Home";
import ReadingHistory from "./pages/ReadingHistory/ReadingHistory";
import store from "./redux/store";

function App() {
  const [toggleDark, setToggleDark] = useState(false);
  const state = useSelector((state) => state.themeReducer);
  return (
    <div>
      <div
        data-theme={`${state.darkMode ? "night" : "light"}`}
        className="min-h-screen"
      >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/post/:_id"
            element={<BlogDetails></BlogDetails>}
          ></Route>
          <Route
            path="/history"
            element={<ReadingHistory></ReadingHistory>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
