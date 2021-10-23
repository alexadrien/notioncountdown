import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime);

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

const useStyle = makeStyles({
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "content-box",
    overflow: "hidden",
  },
  typo: {},
});

function App(): React.ReactElement {
  const queryParams = useQuery();
  const dateString = queryParams.get("date");
  const sizeString = queryParams.get("size") || "50";
  const justifyString = queryParams.get("justify") || "center";
  const alignString = queryParams.get("align") || "center";
  const classes = useStyle();

  return (
    <Box
      className={classes.box}
      style={{
        justifyContent: justifyString,
        alignItems: alignString,
      }}
    >
      <Typography
        variant={"h1"}
        className={classes.typo}
        style={{
          fontSize: `${sizeString}vh`,
        }}
      >
        {dayjs(dateString).diff(dayjs(), "days")} days left
      </Typography>
    </Box>
  );
}

export default App;
