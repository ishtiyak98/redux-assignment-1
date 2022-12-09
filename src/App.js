import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import AddBlog from "./pages/Dashboard/AddBlog";
import DashHome from "./pages/Dashboard/DashHome";
import ListAll from "./pages/Dashboard/ListAll";
import Home from "./pages/Home/Home";
import ReadingHistory from "./pages/ReadingHistory/ReadingHistory";

function App() {
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
          <Route path="/dashboard" element={<DashHome></DashHome>}>
            <Route index element={<ListAll></ListAll>}></Route>
            <Route path="add-blog" element={<AddBlog></AddBlog>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
