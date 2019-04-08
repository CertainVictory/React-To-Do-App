import { ADD_TODO, DELETE_TODO } from "./actions/types";

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    case DELETE_TODO:
      return state.filter((todo, id) => {
        return id !== action.id
      });
    default:
      return state;
  };
};