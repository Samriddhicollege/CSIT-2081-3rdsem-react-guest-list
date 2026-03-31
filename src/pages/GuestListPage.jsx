import { useState } from "react";
import { useGuests } from "../hooks/useGuests";
import Header from "../components/Header";
import StatsBar from "../components/StatsBar";
import GuestForm from "../components/GuestForm";
import SearchFilterBar from "../components/SearchFilterBar";
import GuestList from "../components/GuestList";
import EmptyState from "../components/EmptyState";
import Toast from "../components/Toast";
import "../styles/page.css";

function GuestListPage({ theme, onToggleTheme }) {
  const {
    guests,
    filteredGuests,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    addGuest,
    updateGuest,
    deleteGuest,
    toggleStatus,
    stats,
  } = useGuests();

  const [showForm, setShowForm] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddGuest = (data) => {
    addGuest(data);
    setShowForm(false);
    showToast("Guest added successfully! 🎉");
  };

  const handleEditGuest = (guest) => {
    setEditingGuest(guest);
    setShowForm(true);
  };

  const handleUpdateGuest = (data) => {
    updateGuest(editingGuest.id, data);
    setEditingGuest(null);
    setShowForm(false);
    showToast("Guest updated successfully! ✏️");
  };

  const handleDeleteGuest = (id) => {
    deleteGuest(id);
    showToast("Guest removed.", "error");
  };

  const handleToggleStatus = (id) => {
    toggleStatus(id);
    showToast("Status updated!");
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingGuest(null);
  };

  return (
    <div className="page">
      <Header
        theme={theme}
        onToggleTheme={onToggleTheme}
        onAddGuest={() => {
          setEditingGuest(null);
          setShowForm(true);
        }}
      />

      <main className="page-main">
        <StatsBar stats={stats} />

        {showForm && (
          <GuestForm
            initialData={editingGuest}
            onSubmit={editingGuest ? handleUpdateGuest : handleAddGuest}
            onCancel={handleCancelForm}
            isEditing={!!editingGuest}
          />
        )}

        <SearchFilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
          totalShown={filteredGuests.length}
          totalAll={guests.length}
        />

        {filteredGuests.length === 0 ? (
          <EmptyState
            hasGuests={guests.length > 0}
            onAddGuest={() => setShowForm(true)}
          />
        ) : (
          <GuestList
            guests={filteredGuests}
            onEdit={handleEditGuest}
            onDelete={handleDeleteGuest}
            onToggleStatus={handleToggleStatus}
          />
        )}
      </main>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}

export default GuestListPage;
