import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

const ${NAME} = (): React.ReactElement => {
  const classes = useStyle();

  return <Box className={classes.wrapper}>${NAME}</Box>;
};

export default ${NAME};
