import "../styles/searchfilter.css";

const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "confirmed", label: "✅ Confirmed" },
  { value: "pending", label: "⏳ Pending" },
  { value: "declined", label: "❌ Declined" },
];

function SearchFilterBar({ searchTerm, onSearchChange, filterStatus, onFilterChange, totalShown, totalAll }) {
  return (
    <div className="search-filter-bar">
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, email, or phone..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button className="search-clear" onClick={() => onSearchChange("")} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>

      <div className="filter-tabs">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`filter-tab ${filterStatus === opt.value ? "active" : ""}`}
            onClick={() => onFilterChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <p className="result-count">
        Showing <strong>{totalShown}</strong> of <strong>{totalAll}</strong> guests
      </p>
    </div>
  );
}

export default SearchFilterBar;
