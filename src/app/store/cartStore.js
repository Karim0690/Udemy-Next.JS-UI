import axios from "axios";
import { useSession } from "next-auth/react";
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: null,
  totalPrice: 0,
  totalPriceAfterDiscount: 0,
  discount: 0,

  fetchUsersCart: async (token) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
        {
          headers: {
            Authorization: token,
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
