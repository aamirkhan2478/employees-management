import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Variables
const API = "http://localhost:5000/employees";

//Action Types
const SET_LOADING = "SET_LOADING";
const ADD_EMPLOYEES = "ADD_EMPLOYEES";
const ADD_EMPLOYEES_ERROR = "ADD_EMPLOYEES_ERROR";
const SHOW_EMPLOYEES = "SHOW_EMPLOYEES";
const SHOW_EMPLOYEES_ERROR = "SHOW_EMPLOYEES_ERROR";
const DELETE_EMPLOYEES = "DELETE_EMPLOYEES";
const DELETE_EMPLOYEES_ERROR = "DELETE_EMPLOYEES_ERROR";
const UPDATE_EMPLOYEES = "UPDATE_EMPLOYEES";
const UPDATE_EMPLOYEES_ERROR = "UPDATE_EMPLOYEES_ERROR";

//Reducers
const initialState = {
  employees: [],
  isLoading: false,
  error: {},
};

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_EMPLOYEES:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_EMPLOYEES:
      return {
        ...state,
        isLoading: false,
        employees: state.employees.filter((emp) => emp.id !== payload),
      };
    case UPDATE_EMPLOYEES:
      return {
        ...state,
        isLoading: false,
        employees: state.employees.filter((emp) => emp.id === payload),
      };
    case SHOW_EMPLOYEES:
      return {
        ...state,
        isLoading: false,
        employees: payload,
      };
    case SHOW_EMPLOYEES_ERROR:
    case ADD_EMPLOYEES_ERROR:
    case DELETE_EMPLOYEES_ERROR:
    case UPDATE_EMPLOYEES_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;

//Action Creators
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const showEmployees = createAsyncThunk(
  SHOW_EMPLOYEES,
  async (args, { dispatch }) => {
    try {
      const { data } = await axios.get(API);
      dispatch({
        type: SHOW_EMPLOYEES,
        payload: data,
      });
      return data;
    } catch (error) {
      dispatch({
        type: SHOW_EMPLOYEES_ERROR,
        payload: error.message,
      });
    }
    return args;
  }
);

export const addEmployees = (values) => async (dispatch) => {
  try {
    const { data } = await axios.post(API, values);
    console.log(data);
    dispatch({
      type: ADD_EMPLOYEES,
    });
  } catch (error) {
    dispatch({
      type: ADD_EMPLOYEES_ERROR,
      payload: error.message,
    });
  }
};

export const deleteEmployees = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${API}/${id}`);
    console.log(data);
    dispatch({
      type: DELETE_EMPLOYEES,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_EMPLOYEES_ERROR,
      payload: error.message,
    });
  }
};

export const updateEmployees = (id, values) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${API}/${id}`, values);
    console.log(data);
    dispatch({
      type: UPDATE_EMPLOYEES,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EMPLOYEES_ERROR,
      payload: error.message,
    });
  }
};
