import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeeReducer, { showEmployees } from "./Employees/employees";

const rootReducer = combineReducers({
  employees: employeeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});


export default store;
