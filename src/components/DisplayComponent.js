import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Video = styled.video`
  width: 100%;
  height: 500px;
  background-color: black;
  filter: brightness(${({ brightness }) => `${brightness || 100}%`}) contrast(${({ contrast }) => `${100 + contrast}%`});
`;

export default function DisplayComponent() {
  const videoRef = useRef();
  const {
    contrast,
    pausedVideo,
    selectedVideo,
    volume,
    brightness,
  } = useSelector(({ videoData }) => videoData);

  useEffect(() => {
    videoRef.current[pausedVideo ? "pause" : "play"]();
  }, [selectedVideo, pausedVideo]);

  useEffect(() => {
    if (volume) videoRef.current.volume = volume;
  }, [volume]);

  return (
    <Video
      contrast={contrast}
      brightness={brightness}
      src={selectedVideo?.sources[0]}
      ref={videoRef}
    />
  );
}
