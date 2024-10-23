import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const useUserStore = create((set) => ({
  user: null,
  userData: null,
  loading: false,
  error: null,

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

  fetchUser: async (id) => {
    set({ error: null, loading: true });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/user/${id}`
      );
      set({ userData: response.data.user, loading: false }); // Adjusted to set userData correctly
    } catch (error) {
      set({ error: error.message, loading: false }); // Reset loading state on error
    }
  },

  clearUser: () => {
    localStorage.removeItem("token");
    set({ user: null, userData: null });
  },
}));

export default useUserStore;
