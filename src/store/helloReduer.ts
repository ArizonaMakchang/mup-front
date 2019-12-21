import { ActionTypes } from "../constant/hello";

const helloReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ActionTypes.HELLO_REQUEST: {
      console.log(action.data);
      return {
        ...state,
        ...action.data
      };
    }
    default:
      return state;
  }
};

export default helloReducer;
