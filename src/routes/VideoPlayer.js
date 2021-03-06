import { Grid } from "@material-ui/core";
import React from "react";
import ControlsComponent from "../components/ControlsComponent";
import DisplayComponent from "../components/DisplayComponent";

export default function VideoPlayer() {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} lg={6}>
        <DisplayComponent />
        <ControlsComponent />
      </Grid>
    </Grid>
  );
}
