import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

const ReadingHistory = () => {
  const state = useSelector((state) => state.blogReducer);
  console.log(state);
  return (
    <>
      <Navbar></Navbar>
      <section className="px-5 py-4 lg:px-24 lg:py-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.blogHistory.map((item, index) => (
                <tr key={index} className="hover">
                  <th>{index+1}</th>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td><button className="btn btn-error btn-xs">DELETE</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ReadingHistory;
