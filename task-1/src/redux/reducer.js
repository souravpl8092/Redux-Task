import { ADD_TASK } from "./types";

const initialState = {
  task: []
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK: {
      return {
        ...state,
        task: [...state.task, payload]
      };
    }
    default: {
      return state;
    }
  }
};
