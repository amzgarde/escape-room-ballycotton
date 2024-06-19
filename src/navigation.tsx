import { Stack, Typography } from "@mui/material";
import React from "react";

const Navigation = () => {
  return (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h3">
        Congratulations!
      </Typography>
      <Typography variant="h4">
        You uncovered the secret location and time!
      </Typography>
      <Typography variant="subtitle1">
        You have solved the mystery location for the wedding between Walter
        Raleigh and Elizabeth Throckmorton
      </Typography>
      <Typography variant="body1">
        Unfortunately you are too late! The couple tricked you and are already
        happily married!
      </Typography>
    </Stack>
  );
};

export default Navigation;
