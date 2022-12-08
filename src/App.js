import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Home from "./pages/Home/Home";
import ReadingHistory from "./pages/ReadingHistory/ReadingHistory";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
