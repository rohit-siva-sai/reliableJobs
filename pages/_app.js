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
  const [username, phoneNumber, email, country] = useStore((store) => [
    store.username,
    store.phoneNumber,
    store.email,
    store.country,
  ]);
  // console.log("username", username, phoneNumber, email, country);

  const userCollection = collection(db, "developers");
  const router = useRouter();

  const developerCollection = collection(db, "developers");

  const submitNewUser = async () => {
    try {
      await setDoc(doc(developerCollection), {
        firstName: username.firstName,
        lastName: username.lastName,
        email: email,
        phoneNumber: phoneNumber,
        country: country,
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
