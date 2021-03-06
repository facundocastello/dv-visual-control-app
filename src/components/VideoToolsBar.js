import React from "react";
import { Box, Button, Grid, Slider } from "@material-ui/core";

import {
  Pause,
  PlayArrow,
  Brightness6,
  VolumeUp,
  StarHalf,
} from "@material-ui/icons";

export default function VideoToolsBar({
  contrast,
  brightness,
  pausedVideo,
  selectedVideo,
  volume,
  onPauseClick,
  onVolumeChange,
  onBrightnessChange,
  onContrastChange,
}) {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Button disabled={!selectedVideo} onClick={onPauseClick}>
          {pausedVideo ? <PlayArrow /> : <Pause />}
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider value={volume * 100} onChange={onVolumeChange} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Brightness6 />
        </Grid>
        <Grid item xs>
          <Slider value={brightness} onChange={onBrightnessChange} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <StarHalf />
        </Grid>
        <Grid item xs>
          <Slider value={contrast} onChange={onContrastChange} />
        </Grid>
      </Grid>
    </>
  );
}
