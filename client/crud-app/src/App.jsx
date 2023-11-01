import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReadUser from "./ReadUser";
import UpdateUser from "./assets/UpdateUser";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/readuser/:id" element={<ReadUser />}></Route>
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}
