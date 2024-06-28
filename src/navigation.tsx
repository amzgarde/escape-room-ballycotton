import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Navigation = ({ setEscaped }: { setEscaped: (l: boolean) => void }) => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    console.log(longitude, latitude);
    if (longitude === "51.8" && latitude === "-8.0") {
      setError(false);
      const result = { loggedIn: true, navigation: true };
      localStorage.setItem("ballycotton-data", JSON.stringify(result));
      setEscaped(true);
    } else {
      setError(true);
    }
  };

  return (
    <Stack
      alignItems="center"
      padding="15px"
      sx={{ width: "30%", backgroundColor: "white", borderRadius: "10px" }}
      spacing={2}
    >
      {error && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            Incorrect navigation!
          </Alert>
        </Stack>
      )}
      <Typography variant="h4">Welcome back Captain</Typography>
      <Typography variant="subtitle1">Where would you like to go?</Typography>
      <TextField
        required
        label="Longitude?"
        fullWidth
        value={longitude}
        onChange={(event) => {
          setLongitude(event.target.value);
          setError(false);
        }}
      />
      <TextField
        required
        label="Latitude?"
        fullWidth
        value={latitude}
        onChange={(event) => {
          setLatitude(event.target.value);
          setError(false);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          handleSubmit();
        }}
      >
        Login
      </Button>
    </Stack>
  );
};

export default Navigation;
