import constants from "./constants";
import uiActions from "../uiActions/actions";

const reducer = "videoData";

const fetchVideoData = async (dispatch) => {
  const element = "videoData";
  dispatch(uiActions.addLoading({ reducer, element }));
  try {
    const videoDataResponse = await fetch(
      "https://api.jsonbin.io/b/60340fc4f1be644b0a63433c"
    );
    if (!videoDataResponse.ok) throw videoDataResponse.status;

    const videoData = await videoDataResponse.json();
    dispatch(receiveVideoData(videoData));
  } catch (error) {
    dispatch(uiActions.addError({ reducer, element, error }));
  }
  dispatch(uiActions.removeLoading({ reducer, element }));
};

const receiveSelectedVideo = (selectedVideo) => ({
  type: constants.RECEIVE_SELECTED_VIDEO,
  selectedVideo,
});

const receiveVolume = (volume) => ({
  type: constants.RECEIVE_VOLUME,
  volume,
});

const receiveBrightness = (brightness) => ({
  type: constants.RECEIVE_BRIGHTNESS,
  brightness,
});


const receiveContrast = (contrast) => ({
  type: constants.RECEIVE_CONTRAST,
  contrast,
});

const receiveVideoData = (videoData) => ({
  type: constants.RECEIVE_VIDEO_DATA,
  videoData,
});

const triggerVideo = () => ({
  type: constants.TRIGGER_VIDEO,
});

const actions = {
  fetchVideoData,
  receiveSelectedVideo,
  receiveVideoData,
  receiveVolume,
  receiveBrightness,
  receiveContrast,
  triggerVideo,
};

export default actions;
