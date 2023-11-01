import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  username: { firstName: "", lastName: "" },
  phoneNumber: "",
  country: "",
  email: "",
  primaryRole: "",
  primarySkill: "",
  skillExperience: "",
  workExperience: "",
  englishProficiency: "",
  hearAboutUs: "",
  resume: "",
  formNo: 1,

  updateFormNo: async (value) => set((store) => ({ formNo: value })),
  updateUserName: async (user) => set((store) => ({ username: user })),

  updateEmail: async (value) => set((store) => ({ email: value })),
  updatePhoneNumber: async (value) => set((store) => ({ phoneNumber: value })),
  updateCountry: async (value) => set((store) => ({ country: value })),
  updatePrimaryRole: async (value) => set((store) => ({ primaryRole: value })),
  updatePrimarySkill: async (value) =>
    set((store) => ({ primarySkill: value })),
  updateSkillExperience: async (value) =>
    set((store) => ({ skillExperience: value })),
  updateWorkExperience: async (value) =>
    set((store) => ({ workExperience: value })),
  updateEnglishProficiency: async (value) =>
    set((store) => ({ englishProficiency: value })),
  updateHearAboutUs: async (value) => set((store) => ({ hearAboutUs: value })),
  updateResume: async (value) => set((store) => ({ resume: value })),
});

export const useStore = create(store, { name: "store" });
