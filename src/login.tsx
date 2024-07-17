import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Login = ({ setLoggedIn }: { setLoggedIn: (l: boolean) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (username === "captain" && password === "1207") {
      setError(false);
      const result = { loggedIn: true, navigation: false };
      localStorage.setItem("ballycotton-data", JSON.stringify(result));
      setLoggedIn(true);
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
            Incorrect credentials!
          </Alert>
        </Stack>
      )}
      <Typography variant="h4">
        <i>HMS Upnor</i>
      </Typography>
      <TextField
        required
        label="Username?"
        fullWidth
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
          setError(false);
        }}
      />
      <TextField
        required
        label="Password?"
        type="password"
        fullWidth
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
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

export default Login;
