import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case "CLEAR":
      return {
        name: "",
        nickname: ""
      };
    default:
      return {
        ...state
      };
  }
}

export function useInputs(initial) {
  const [state, dispatch] = useReducer(reducer, initial);

  const onChange = (type, payload) => {
    dispatch({
      type: type,
      payload: payload
    });
  };

  return [state, onChange];
}
