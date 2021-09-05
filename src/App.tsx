import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import ShellPage from "./pages/shellPage/ShellPage";
const App: React.FC = () => {
  return (
    <div className="App">
      <ShellPage />
    </div>
  );
};
export default App;
