import "../styles/header.css";

function Header({ theme, onToggleTheme, onAddGuest }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="header-icon">🎟️</span>
          <div>
            <h1 className="header-title">GuestFlow</h1>
            <p className="header-subtitle">Event Guest Manager</p>
          </div>
        </div>
        <div className="header-actions">
          <button
            className="btn btn-ghost"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button className="btn btn-primary" onClick={onAddGuest}>
            <span>＋</span> Add Guest
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
