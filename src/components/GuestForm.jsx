import { useState, useEffect } from "react";
import { validateGuestForm } from "../utils/helpers";
import "../styles/form.css";

const MEAL_OPTIONS = ["Vegetarian", "Vegan", "Non-Vegetarian", "Gluten-Free", "No Preference"];
const TABLE_OPTIONS = ["Table A", "Table B", "Table C", "Table D", "VIP Table", "Unassigned"];

function GuestForm({ initialData, onSubmit, onCancel, isEditing }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mealPreference: "No Preference",
    tableAssignment: "Unassigned",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        mealPreference: initialData.mealPreference || "No Preference",
        tableAssignment: initialData.tableAssignment || "Unassigned",
        notes: initialData.notes || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateGuestForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="form-overlay">
      <div className="form-card">
        <div className="form-header">
          <h2>{isEditing ? "✏️ Edit Guest" : "➕ Add New Guest"}</h2>
          <button className="btn-close" onClick={onCancel} aria-label="Close">✕</button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Asha Sharma"
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. asha@email.com"
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +977 9812345678"
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="error-msg">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mealPreference">Meal Preference</label>
              <select
                id="mealPreference"
                name="mealPreference"
                value={formData.mealPreference}
                onChange={handleChange}
              >
                {MEAL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tableAssignment">Table Assignment</label>
              <select
                id="tableAssignment"
                name="tableAssignment"
                value={formData.tableAssignment}
                onChange={handleChange}
              >
                {TABLE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-group form-group--full">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requirements or notes..."
                rows={3}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-ghost" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {isEditing ? "Save Changes" : "Add Guest"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GuestForm;
