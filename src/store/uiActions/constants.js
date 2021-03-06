const videoDataConstants = {
  ADD_ERROR: "ADD_ERROR",
  ADD_LOADING: "ADD_LOADING",
  REMOVE_ERROR: "REMOVE_ERROR",
  REMOVE_LOADING: "REMOVE_LOADING",
};

export default Object.fromEntries(
  Object.entries(videoDataConstants).map((elem) => [
    elem[0],
    `UI_ACTIONS_${elem[1]}`,
  ])
);
