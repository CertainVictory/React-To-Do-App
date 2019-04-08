import { ADD_TODO, DELETE_TODO } from "./types";

export const add_todo = payload => ({
  type: ADD_TODO,
  id: payload.id = Math.random() + 1,
  payload
});
export const delete_todo = id => ({
  type: DELETE_TODO,
  id
});