import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => {
    set({ user });
    set({ isAuthenticated:!!user });
  },

}));

export default useAuthStore;
