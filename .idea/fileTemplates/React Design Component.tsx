import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const DesignModel = (): React.ReactElement => {
  const classes = useStyles();
  return <Box className={classes.root}>DesignModel</Box>;
};

export default DesignModel;

