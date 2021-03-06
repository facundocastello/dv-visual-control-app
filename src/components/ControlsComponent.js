import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../store/videoData/actions";
import TabPanelCategory from "./TabsPaneCategory";
import VideoToolsBar from "./VideoToolsBar";

export default function ControlsComponent(video) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    videoData: {
      videoData,
      contrast,
      brightness,
      pausedVideo,
      selectedVideo,
      volume,
    },
    uiActions: { errors, loading },
  } = useSelector(({ videoData, uiActions }) => ({
    videoData,
    uiActions,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!videoData) dispatch(actions.fetchVideoData);
  }, [videoData, dispatch]);

  const handleVideoSelect = useCallback(
    (video) => {
      dispatch(actions.receiveSelectedVideo(video));
    },
    [dispatch]
  );

  const handleTryAgain = () => dispatch(actions.fetchVideoData);

  const handlePauseClick = () => dispatch(actions.triggerVideo());

  const handleVolumeChange = (ev, value) =>
    dispatch(actions.receiveVolume(value / 100));

  const handleBrightnessChange = (ev, value) =>
    dispatch(actions.receiveBrightness(value));

  const handleContrastChange = (ev, value) =>
    dispatch(actions.receiveContrast(value));

  if (loading.videoData?.videoData)
    return (
      <Box
        width="100%"
        height="250px"
        position="relative"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );

  if (errors.videoData?.videoData)
    return (
      <Box
        width="100%"
        height="250px"
        position="relative"
        flexDirection="column"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography gutterBottom variant="h5" component="h2">
          Error
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Something happen, please try again
        </Typography>
        <Button onClick={handleTryAgain} size="small" color="primary">
          Try Again
        </Button>
      </Box>
    );

  return (
    <>
      <VideoToolsBar
        contrast={contrast}
        brightness={brightness}
        pausedVideo={pausedVideo}
        selectedVideo={selectedVideo}
        volume={volume}
        onPauseClick={handlePauseClick}
        onVolumeChange={handleVolumeChange}
        onBrightnessChange={handleBrightnessChange}
        onContrastChange={handleContrastChange}
      />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="video categories"
        >
          {videoData?.categories.map((category) => (
            <Tab
              label={category.name}
              id={category.name}
              key={`tab-${category.name}`}
              aria-controls={category.name}
            />
          ))}
        </Tabs>
      </AppBar>
      {videoData?.categories.map((category, index) => (
        <TabPanelCategory
          category={category}
          value={value}
          key={`tab-pane-${category.name}`}
          id={category.name}
          index={index}
          onVideoClick={handleVideoSelect}
        />
      ))}
    </>
  );
}
