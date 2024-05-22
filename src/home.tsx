import React, { useState, useEffect } from "react";
import Login from "./login";
import Navigation from "./navigation";
import { Stack } from "@mui/material";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch the user email and token from local storage
    const storedUser = JSON.parse(localStorage.getItem("user")!);

    // If the username does not exist, mark the user as logged out
    if (!storedUser || !storedUser.username) {
      setLoggedIn(false);
      return;
    } else {
      setLoggedIn(true);
    }
  }, []);

  console.log(loggedIn);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", backgroundColor: "black" }}
    >
      {loggedIn ? <Navigation /> : <Login setLoggedIn={setLoggedIn} />}
      <input
        className={"inputButton"}
        type="button"
        onClick={() => setLoggedIn(false)}
        value={"Clear"}
      />
    </Stack>
  );
};

export default Home;
