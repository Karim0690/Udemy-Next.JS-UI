import axios from "axios";
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: null,
  totalPrice: 0,
  totalPriceAfterDiscount: 0,
  discount: 0,

  fetchUsersCart: async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhMmQ1YTIwMWY4MDZmOTJlZWJiMjUiLCJuYW1lIjoiS2FyaW0gQWJkZWxrYXJlZW0iLCJlbWFpbCI6IkthcmltQXltYW4zNjBAZ21haWwuY29tIiwicm9sZSI6WyJzdHVkZW50IiwiaW5zdHJ1Y3RvciJdLCJpYXQiOjE3MzAyMTgxNjYsImV4cCI6MTc2MTc3NTc2Nn0.F-HpJoI6sNENg8pkuWqZ0qlJ-y-WScNJcOGgQi98SFM`, // Replace with your actual token or handle it securely
          },
        }
      );
      const { cart } = response.data;
      set({
        cart,
        totalPrice: cart.totalPrice,
        totalPriceAfterDiscount: cart.totalPriceAfterDiscount,
        discount: cart.discount,
      });
    } catch (error) {
      console.error("Error fetching cart:", error);
      set({
        loading: false,
        error: error.response?.data?.message || "An error occurred.",
      });
    }
  },
}));

export default useCartStore;
