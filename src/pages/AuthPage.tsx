import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

const AuthPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Paper sx={{ padding: "50px 30px", width: "360px" }}>
        <Typography
          variant="h1"
          mb={2}
          fontSize="2rem"
          align="center"
          fontWeight="500"
          color="#2E335A"
        >
          Вход в систему
        </Typography>
        <LoginForm />
      </Paper>
    </Box>
  );
};

export default AuthPage;
