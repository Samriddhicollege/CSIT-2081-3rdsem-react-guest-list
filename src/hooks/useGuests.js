import { useState, useEffect } from "react";
import { generateId } from "../utils/helpers";

const STORAGE_KEY = "guestapp_guests";

export function useGuests() {
  const [guests, setGuests] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(guests));
  }, [guests]);

  const addGuest = (guestData) => {
    const newGuest = {
      id: generateId(),
      ...guestData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setGuests((prev) => [newGuest, ...prev]);
    return newGuest;
  };

  const updateGuest = (id, updatedData) => {
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...updatedData } : g))
    );
  };

  const deleteGuest = (id) => {
    setGuests((prev) => prev.filter((g) => g.id !== id));
  };

  const toggleStatus = (id) => {
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id !== id) return g;
        const cycle = { pending: "confirmed", confirmed: "declined", declined: "pending" };
        return { ...g, status: cycle[g.status] };
      })
    );
  };

  const filteredGuests = guests.filter((g) => {
    const matchesSearch =
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (g.phone && g.phone.includes(searchTerm));
    const matchesFilter = filterStatus === "all" || g.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: guests.length,
    confirmed: guests.filter((g) => g.status === "confirmed").length,
    pending: guests.filter((g) => g.status === "pending").length,
    declined: guests.filter((g) => g.status === "declined").length,
  };

  return {
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
  };
}
