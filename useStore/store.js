import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  username: { firstName: "", lastName: "" },
  phoneNumber: "",
  country: "",
  email: "",

  updateUserName: async (user) => set((store) => ({ username: user })),

  updateEmail: async (value) => set((store) => ({ email: value })),
  updatePhoneNumber: async (value) => set((store) => ({ phoneNumber: value })),
  updateCountry: async (value) => set((store) => ({ country: value })),
});

export const useStore = create(store, { name: "store" });
