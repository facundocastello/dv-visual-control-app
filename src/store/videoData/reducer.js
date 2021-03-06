import constants from "./constants";

const initialState = {
  videoData: undefined,
  selectedVideo: undefined,
  pausedVideo: true,
  volume: 1,
  brightness: 100,
  contrast: 0,
};

export default function videoDataReducer(state = initialState, action) {
  switch (action.type) {
    case constants.RECEIVE_VIDEO_DATA: {
      return {
        ...state,
        videoData: action.videoData,
      };
    }
    case constants.RECEIVE_SELECTED_VIDEO: {
      return {
        ...state,
        selectedVideo: action.selectedVideo,
      };
    }
    case constants.RECEIVE_VOLUME: {
      return {
        ...state,
        volume: action.volume,
      };
    }
    case constants.RECEIVE_BRIGHTNESS: {
      return {
        ...state,
        brightness: action.brightness,
      };
    }
    case constants.RECEIVE_CONTRAST: {
      return {
        ...state,
        contrast: action.contrast,
      };
    }
    case constants.TRIGGER_VIDEO: {
      return {
        ...state,
        pausedVideo: !state.pausedVideo,
      };
    }

    default:
      return state;
  }
}
