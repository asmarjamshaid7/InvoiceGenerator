import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

export default function MUIDateField({ label, value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        views={["year", "month", "day"]}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-input": {
                padding: "0 10px",
              },
              "& .MuiInputLabel-root": {
                top: "-4px",
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
