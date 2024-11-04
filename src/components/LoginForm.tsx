import React, { useState, useEffect } from "react";
import { Box, Button, FormHelperText } from "@mui/material";
import ValidatedTextField from "./ValidatedTextField";
import {
  ERROR_MESSAGES,
  CREDENTIALS,
  LOCAL_STORAGE_KEYS,
} from "../config/constants";

const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    login: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = "/";
    }
  }, [isLoggedIn]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", login: "" }));
  };

  const validateForm = () => {
    const newErrors = { username: "", password: "", login: "" };
    if (!formValues.username)
      newErrors.username = ERROR_MESSAGES.REQUIRED_FIELD;
    if (!formValues.password)
      newErrors.password = ERROR_MESSAGES.REQUIRED_FIELD;
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    const hasErrors = !!newErrors.username || !!newErrors.password;
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    if (
      formValues.username === CREDENTIALS.USERNAME &&
      formValues.password === CREDENTIALS.PASSWORD
    ) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, "true");
      setIsLoggedIn(true);
    } else {
      setErrors((prev) => ({
        ...prev,
        login: ERROR_MESSAGES.INVALID_CREDENTIALS,
      }));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <ValidatedTextField
        label="Логин"
        name="username"
        value={formValues.username}
        error={errors.username}
        onChange={handleChange}
      />
      <ValidatedTextField
        label="Пароль"
        name="password"
        type="password"
        value={formValues.password}
        error={errors.password}
        onChange={handleChange}
      />
      {errors.login && (
        <FormHelperText error sx={{ mt: 2, textAlign: "center" }}>
          {errors.login}
        </FormHelperText>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2, background: "#2E335A" }}
      >
        Войти
      </Button>
    </Box>
  );
};

export default LoginForm;
