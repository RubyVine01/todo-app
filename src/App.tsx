import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import TodoPage from "./pages/TodoPage";

const App: React.FC = () => {
  const isLoggedIn: boolean = localStorage.getItem("loggedIn") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/"
          element={isLoggedIn ? <TodoPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
