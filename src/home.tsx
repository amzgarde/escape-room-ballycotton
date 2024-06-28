import React, { useState, useEffect } from "react";
import Login from "./login";
import Navigation from "./navigation";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { amber, teal } from "@mui/material/colors";
import Success from "./success";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [escaped, setEscaped] = useState(false);

  useEffect(() => {
    const weddingData = JSON.parse(localStorage.getItem("ballycotton-data")!);

    if (weddingData?.loggedIn) {
      setLoggedIn(true);
      if (weddingData.navigation) {
        setEscaped(true);
      }
    } else {
      setLoggedIn(false);
      setEscaped(false);
    }
  }, []);

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber,
    },
  });

  const handleClear = () => {
    const result = { loggedIn: false, navigation: false };
    localStorage.setItem("ballycotton-data", JSON.stringify(result));
    setLoggedIn(false);
    setEscaped(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
          {loggedIn && !escaped && <Navigation setEscaped={setEscaped} />}
          {loggedIn && escaped && <Success />}
        </Box>
        <input
          className={"inputButton"}
          type="button"
          onClick={() => handleClear()}
          value={"Clear"}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Home;
