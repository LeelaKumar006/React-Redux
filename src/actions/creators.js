import { DECREMENT, INCREMENT, SET_NAME } from "./constatnts";

const increment = (val) => {
  const value = parseInt(val);

  return {
    type: INCREMENT,
    payload: { value },
  };
};

const decrement = (val) => {
  const value = parseInt(val);

  return {
    type: DECREMENT,
    payload: { value },
  };
};

const setName = (name) => {
  return {
    type: SET_NAME,
    payload: { name },
  };
};

export { increment, decrement, setName };
