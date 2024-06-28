import { Stack, Typography } from "@mui/material";
import React from "react";

const Success = () => {
  return (
    <Stack
      alignItems="center"
      spacing={4}
      padding="20px"
      sx={{ width: "50%", backgroundColor: "white", borderRadius: "10px" }}
    >
      <Typography variant="h3">Congratulations!</Typography>
      <Typography variant="h4">
        You have successfully navigated to Ballycotton with the cargo/loot.
      </Typography>
    </Stack>
  );
};

export default Success;
