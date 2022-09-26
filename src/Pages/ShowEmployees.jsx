import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEmployees } from "../Redux/Employees/employees";

const ShowEmployees = () => {
  const dispatch = useDispatch();

  const { employees } = useSelector((state) => state.employees);
  const showEmployee = async () => {
    dispatch(showEmployees());
  };

  useEffect(() => {
    showEmployee();
  }, []);

  document.title = "Employees Management | Show Employees";
  return (
    <Container sx={{ my: 5 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976D2"}}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button color="primary">
                      <Edit /> Edit
                    </Button>
                    <Button color="error">
                      <Delete /> DELETE
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ShowEmployees;
