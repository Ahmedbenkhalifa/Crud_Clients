import { ADD_CLIENT, UPDATE_CLIENT } from "../constants/actionTypes";
import genID from "../utils/generateID";

const addClient = (payload) => {
  return {
    type: ADD_CLIENT,
    payload: { id: genID(), ...payload, age: payload.age.toString() },
  };
};

const updateClient = (payload) => {
  return { type: UPDATE_CLIENT, payload };
};

export { addClient, updateClient };
