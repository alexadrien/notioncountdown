import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

type IProps = {
  id: string;
};

const ${NAME}: React.FC<IProps> = ({ id }) => {
  const classes = useStyle();

  return <Box className={classes.wrapper}>{id}</Box>;
};
export default ${NAME};

