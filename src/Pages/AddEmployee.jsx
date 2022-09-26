import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addEmployees } from "../Redux/Employees/employees";

const AddEmployee = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const { name, email, contact, address } = values;
  const clickHandler = () => {
    if (name === "" || email === "" || contact === "" || address == "") {
      alert("Please fill all required fields");
      return;
    }

    const newData = {
      id: uuid(),
      ...values,
    };
    dispatch(addEmployees(newData));
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        mt: 3,
      }}
    >
      <TextField
        label="Name"
        sx={{ width: 600 }}
        name="name"
        value={name}
        onChange={changeHandler}
      />
      <TextField
        label="Email"
        sx={{ width: 600 }}
        name="email"
        value={email}
        onChange={changeHandler}
      />
      <TextField
        label="Contact"
        sx={{ width: 600 }}
        name="contact"
        value={contact}
        onChange={changeHandler}
      />
      <TextField
        label="Address"
        multiline
        sx={{ width: 600 }}
        name="address"
        value={address}
        onChange={changeHandler}
      />
      <Button variant="contained" sx={{ width: 200 }} onClick={clickHandler}>
        Submit
      </Button>
    </Container>
  );
};

export default AddEmployee;
