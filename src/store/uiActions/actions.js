import constants from "./constants";

const addError = ({reducer, element, error}) => ({
  type: constants.ADD_ERROR,
  reducer,
  element,
  error,
});

const addLoading = ({reducer, element}) => ({
  type: constants.ADD_LOADING,
  reducer,
  element,
});

const removeError = ({reducer, element}) => ({
  type: constants.REMOVE_ERROR,
  reducer,
  element,
});

const removeLoading = ({reducer, element}) => ({
  type: constants.REMOVE_LOADING,
  reducer,
  element,
});

const actions = {
  addError,
  addLoading,
  removeError,
  removeLoading,
};

export default actions;
