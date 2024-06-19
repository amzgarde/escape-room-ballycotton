import React, { useState, useEffect } from "react";
import Login from "./login";
import Navigation from "./navigation";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { amber, teal } from "@mui/material/colors";

const Home = () => {
  const [escaped, setEscaped] = useState(false);

  useEffect(() => {
    const weddingData = JSON.parse(localStorage.getItem("youghal-data")!);

    if (!weddingData?.success) {
      setEscaped(false);
    } else {
      setEscaped(true);
    }
  }, []);

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: amber,
    },
  });

  const handleClear = () => {
    const result = { success: false };
    localStorage.setItem("youghal-data", JSON.stringify(result));
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
          {escaped ? <Navigation /> : <Login setEscaped={setEscaped} />}
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
