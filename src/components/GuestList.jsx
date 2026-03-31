import GuestItem from "./GuestItem";
import "../styles/guestlist.css";

function GuestList({ guests, onEdit, onDelete, onToggleStatus }) {
  return (
    <ul className="guest-list" role="list">
      {guests.map((guest) => (
        <GuestItem
          key={guest.id}
          guest={guest}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  );
}

export default GuestList;
