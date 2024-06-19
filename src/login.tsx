import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";

const Login = ({ setEscaped }: { setEscaped: (l: boolean) => void }) => {
  const [day, setDay] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [month, setMonth] = useState("");
  const [time, setTime] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);

  const handleDayChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
    setError(false);
  };
  const handleDOWChange = (event: SelectChangeEvent) => {
    setDayOfWeek(event.target.value as string);
    setError(false);
  };
  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
    setError(false);
  };

  const handleSubmit = () => {
    if (
      dayOfWeek.toLocaleLowerCase() === "friday" &&
      day === "7" &&
      month === "8" &&
      time?.hour() === 18 &&
      time?.minute() === 10 &&
      location.replace("'", "").toLowerCase() ===
        "St Marys Collegiate Church".toLowerCase()
    ) {
      setError(false);
      const result = { success: true };
      localStorage.setItem("youghal-data", JSON.stringify(result));
      setEscaped(true);
    } else {
      setError(true);
    }
  };

  const dow = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Stack alignItems="center" sx={{ width: "50%" }} spacing={2}>
      {error && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            INCORRECT! No escaping early!
          </Alert>
        </Stack>
      )}
      <Typography variant="h4">Secret Wedding??</Typography>
      <Typography variant="body1">
        Can you figure out where and when the Secret Wedding will happen??
      </Typography>
      <TextField
        required
        label="Location?"
        fullWidth
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
          setError(false);
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="dow-label">Day of week?</InputLabel>
            <Select
              labelId="dow-label"
              id="dow-select"
              value={dayOfWeek}
              label="Day of the week?"
              onChange={handleDOWChange}
            >
              {dow.map((day) => {
                return (
                  <MenuItem key={day} value={String(day)}>
                    {day}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="day-label">Day?</InputLabel>
            <Select
              labelId="day-label"
              id="day-select"
              value={day}
              label="Day?"
              onChange={handleDayChange}
            >
              {days.map((day) => {
                return (
                  <MenuItem key={day} value={String(day)}>
                    {day}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="month-label">Month?</InputLabel>
            <Select
              labelId="month-label"
              id="month-select"
              value={month}
              label="Month?"
              onChange={handleMonthChange}
            >
              {months.map((month) => {
                return (
                  <MenuItem key={month} value={String(month)}>
                    {month}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <TimePicker
              onChange={(newValue) => setTime(newValue)}
              value={time}
              label="Time?"
              ampm={false}
            />
          </Stack>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={() => {
          handleSubmit();
        }}
      >
        Escape
      </Button>
    </Stack>
  );
};

export default Login;
