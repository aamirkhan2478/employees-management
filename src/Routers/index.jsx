import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AddEmployee from "../Pages/AddEmployee";
import ShowEmployees from "../Pages/ShowEmployees";

const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowEmployees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </>
  );
};

export default Routers;
