import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
  Tooltip,
} from "@material-ui/core";

const URL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/";

export default function TabPanelCategory({
  category,
  value,
  id,
  index,
  onVideoClick,
  ...other
}) {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={id}
      className={classes.root}
      {...other}
    >
      {value === index && (
        <GridList className={classes.gridList} cols={2.5}>
          {category.videos?.map((video) => (
            <Tooltip key={video.sources[0]} title={video.description}>
              <GridListTile onClick={() => onVideoClick(video)}>
                <img src={`${URL}${video.thumb}`} alt={video.title} />
                <GridListTileBar
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  title={video.title}
                  subtitle={video.subtitle}
                />
              </GridListTile>
            </Tooltip>
          ))}
        </GridList>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));
