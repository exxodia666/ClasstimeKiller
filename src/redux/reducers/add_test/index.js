import {
  ADD_TEST_SUCCESS,
  ADD_TEST_ERROR,
  RESET_TEST,
} from "../../actions/add_test";

const initialState = {
  status: "idle",
  message: ''
};
//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        action: action.payload.data,
      };
    case ADD_TEST_ERROR:
      return {
        status: 404,
        message: action.payload,
      };

    case RESET_TEST:
      return { ...initialState };
    default:
      return state;
  }
};
