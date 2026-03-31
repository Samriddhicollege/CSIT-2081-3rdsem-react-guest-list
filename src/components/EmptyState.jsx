import "../styles/emptystate.css";

function EmptyState({ hasGuests, onAddGuest }) {
  return (
    <div className="empty-state">
      <div className="empty-illustration">{hasGuests ? "🔍" : "🎉"}</div>
      <h3 className="empty-title">
        {hasGuests ? "No guests match your search" : "Your guest list is empty"}
      </h3>
      <p className="empty-sub">
        {hasGuests
          ? "Try adjusting your search or filter to find guests."
          : "Start building your event's guest list by adding your first guest."}
      </p>
      {!hasGuests && (
        <button className="btn btn-primary" onClick={onAddGuest}>
          ＋ Add First Guest
        </button>
      )}
    </div>
  );
}

export default EmptyState;
