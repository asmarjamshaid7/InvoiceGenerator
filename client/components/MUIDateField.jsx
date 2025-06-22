import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function MUIDateField({ label, value, onChange, className }) {
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
            InputProps={{
              ...params.InputProps,
              className: className || "", // Apply passed className
            }}
            InputLabelProps={{
              shrink: true, // Makes the label stay above even with custom CSS
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
