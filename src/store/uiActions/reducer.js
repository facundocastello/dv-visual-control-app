import constants from "./constants";

const initialState = {
  loading: {},
  errors: {},
};

export default function videoDataReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_ERROR: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.reducer]: {
            ...state.errors[action.reducer],
            [action.element]: action.error,
          },
        },
      };
    }
    case constants.ADD_LOADING: {
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.reducer]: {
            ...state.loading[action.reducer],
            [action.element]: true,
          },
        },
      };
    }
    case constants.REMOVE_ERROR: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.reducer]: {
            ...state.errors[action.reducer],
            [action.element]: null,
          },
        },
      };
    }
    case constants.REMOVE_LOADING: {
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.reducer]: {
            ...state.loading[action.reducer],
            [action.element]: false,
          },
        },
      };
    }
    default:
      return state;
  }
}
