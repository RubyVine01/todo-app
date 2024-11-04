import React from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";

interface ValidatedTextFieldProps {
  label: string;
  name: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const ValidatedTextField: React.FC<ValidatedTextFieldProps> = ({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
}) => (
  <FormControl fullWidth margin="normal" error={!!error}>
    <TextField
      label={label}
      variant="outlined"
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
    />
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default ValidatedTextField;
