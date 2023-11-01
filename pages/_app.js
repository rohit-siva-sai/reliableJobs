import "@/styles/globals.css";
import { useStore } from "@/useStore/store";
import { useEffect } from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  addDoc,
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [
    username,
    phoneNumber,
    email,
    country,
    primaryRole,
    primarySkill,
    skillExperience,
    englishProficiency,
    workExperience,
    hearAboutUs,
    resume,
  ] = useStore((store) => [
    store.username,
    store.phoneNumber,
    store.email,
    store.country,
    store.primaryRole,
    store.primarySkill,
    store.skillExperience,
    store.englishProficiency,
    store.workExperience,
    store.hearAboutUs,
    store.resume,
  ]);
  console.log(
    "username",
    username,
    phoneNumber,
    email,
    country,
    primaryRole,
    primarySkill,
    skillExperience,
    englishProficiency,
    workExperience,
    hearAboutUs,
    resume
  );

  const userCollection = collection(db, "developers");
  const router = useRouter();

  const developerCollection = collection(db, "developers");

  const submitNewUser = async () => {
    try {
      await setDoc(doc(developerCollection), {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        country: country,
        primaryRole: primaryRole,
        primarySkills: primarySkill,
        skillExperience: skillExperience,
        englishProficiency: englishProficiency,
        workExperience: workExperience,
        hearAboutUs: hearAboutUs,
        resume: resume,
      });

      toast.success("Successfully submited");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      {/* <Navbar logOut={logOut} /> */}

      <Component submitNewUser={submitNewUser} {...pageProps} />
    </>
  );
}
