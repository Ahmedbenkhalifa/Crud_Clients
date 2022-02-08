import { ADD_CLIENT, UPDATE_CLIENT } from "../constants/actionTypes";
import fakeClients from "../constants/fakeClients";

const initialState = {
  clients: [...fakeClients],
};

const clientReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CLIENT:
      return { ...prevState, clients: [...prevState.clients, payload] };
    case UPDATE_CLIENT:
      return {
        ...prevState,
        clients: [
          ...prevState.clients.filter((elem) => elem.id !== payload.id),
          payload,
        ],
      };

    default:
      return prevState;
  }
};
export default clientReducer;
