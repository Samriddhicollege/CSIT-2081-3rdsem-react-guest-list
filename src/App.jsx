import { useState, useEffect } from "react";
import GuestListPage from "./pages/GuestListPage";
import "./styles/global.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("guestapp_theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("guestapp_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <GuestListPage theme={theme} onToggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
