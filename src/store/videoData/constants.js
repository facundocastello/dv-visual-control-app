const videoDataConstants = {
  RECEIVE_VIDEO_DATA: "RECEIVE_VIDEO_DATA",
  RECEIVE_SELECTED_VIDEO: "RECEIVE_SELECTED_VIDEO",
  TRIGGER_VIDEO: "TRIGGER_VIDEO",
  RECEIVE_VOLUME: "RECEIVE_VOLUME",
  RECEIVE_BRIGHTNESS: "RECEIVE_BRIGHTNESS",
  RECEIVE_CONTRAST: "RECEIVE_CONTRAST",
};

export default Object.fromEntries(
  Object.entries(videoDataConstants).map((elem) => [
    elem[0],
    `VIDEO_DATA_${elem[1]}`,
  ])
);
