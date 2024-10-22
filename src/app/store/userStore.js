import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const useUserStore = create((set) => ({
  user: null,

  setUser: () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        set({ user: decoded });
      } catch (error) {
        console.error("Invalid token:", error);
        set({ user: null }); // Reset user state if token is invalid
      }
    } else {
      set({ user: null }); // No token found
    }
  },

  clearUser: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));

export default useUserStore;
