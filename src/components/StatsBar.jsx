import "../styles/stats.css";

function StatCard({ label, value, color, emoji }) {
  return (
    <div className="stat-card" style={{ "--accent": color }}>
      <span className="stat-emoji">{emoji}</span>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <StatCard label="Total Guests" value={stats.total} color="#6366f1" emoji="👥" />
      <StatCard label="Confirmed" value={stats.confirmed} color="#10b981" emoji="✅" />
      <StatCard label="Pending" value={stats.pending} color="#f59e0b" emoji="⏳" />
      <StatCard label="Declined" value={stats.declined} color="#ef4444" emoji="❌" />
    </div>
  );
}

export default StatsBar;
