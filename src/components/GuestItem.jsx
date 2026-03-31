import { useState } from "react";
import { STATUS_LABELS, STATUS_COLORS, formatDate } from "../utils/helpers";
import "../styles/guestitem.css";

function GuestItem({ guest, onEdit, onDelete, onToggleStatus }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteClick = () => {
    if (confirmDelete) {
      onDelete(guest.id);
    } else {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 3000);
    }
  };

  const statusColor = STATUS_COLORS[guest.status];
  const statusLabel = STATUS_LABELS[guest.status];

  const initials = guest.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");

  return (
    <li className={`guest-item guest-item--${guest.status}`}>
      <div className="guest-avatar" style={{ "--color": statusColor }}>
        {initials}
      </div>

      <div className="guest-info">
        <div className="guest-name-row">
          <span className="guest-name">{guest.name}</span>
          <button
            className="status-badge"
            style={{ "--color": statusColor }}
            onClick={() => onToggleStatus(guest.id)}
            title="Click to cycle status"
          >
            {statusLabel}
          </button>
        </div>
        <span className="guest-email">📧 {guest.email}</span>
        {guest.phone && <span className="guest-phone">📱 {guest.phone}</span>}
        <div className="guest-meta">
          {guest.mealPreference !== "No Preference" && (
            <span className="guest-tag">🍽 {guest.mealPreference}</span>
          )}
          {guest.tableAssignment !== "Unassigned" && (
            <span className="guest-tag">🪑 {guest.tableAssignment}</span>
          )}
          <span className="guest-date">Added {formatDate(guest.createdAt)}</span>
        </div>
        {guest.notes && <p className="guest-notes">💬 {guest.notes}</p>}
      </div>

      <div className="guest-actions">
        <button
          className="btn-icon btn-edit"
          onClick={() => onEdit(guest)}
          aria-label="Edit guest"
          title="Edit"
        >
          ✏️
        </button>
        <button
          className={`btn-icon btn-delete ${confirmDelete ? "btn-delete--confirm" : ""}`}
          onClick={handleDeleteClick}
          aria-label="Delete guest"
          title={confirmDelete ? "Click again to confirm" : "Delete"}
        >
          {confirmDelete ? "⚠️" : "🗑️"}
        </button>
      </div>
    </li>
  );
}

export default GuestItem;
