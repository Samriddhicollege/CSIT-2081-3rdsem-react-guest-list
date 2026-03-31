export const generateId = () =>
  `guest_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

export const validateGuestForm = ({ name, email, phone }) => {
  const errors = {};
  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (phone && !/^\+?[\d\s\-()]{7,15}$/.test(phone)) {
    errors.phone = "Phone number is invalid.";
  }
  return errors;
};

export const STATUS_LABELS = {
  pending: "Pending",
  confirmed: "Confirmed",
  declined: "Declined",
};

export const STATUS_COLORS = {
  pending: "#f59e0b",
  confirmed: "#10b981",
  declined: "#ef4444",
};

export const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
