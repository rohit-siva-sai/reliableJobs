import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserName from "@/components/form1/userName";
import { useStore } from "@/useStore/store";
import PhoenEmail from "@/components/form1/phoneEmail";
import Country from "@/components/form1/country";
import Uptal from "@/components/home/uptal";
import Form1 from "@/components/form1/form1";
import Form2 from "@/components/form2/form2";
import Form3 from "@/components/form3/form3";
import FinalPage from "@/components/home/finalPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ submitNewUser }) {
  const router = useRouter();

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
    updateFormNo,
    formNo,
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
    store.updateFormNo,
    store.formNo,
  ]);

  const [check, setCheck] = useState();

  const checkFilled = () => {
    if (
      !username.firstName ||
      !username.firstName ||
      !phoneNumber ||
      !email ||
      !country ||
      !primaryRole ||
      !primarySkill ||
      !workExperience ||
      !skillExperience ||
      !resume
    ) {
       updateFormNo(1)
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className={`${inter.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <Uptal />
        <div className="col-span-2 flex flex-col  md:px-20 px-4 py-16 ">
          <div className="flex justify-between">
            <p
              className={`w-1/5 h-[6px] ${
                formNo >= 1 ? "bg-[#009661] " : "bg-gray-300"
              } rounded-xl transition-colors duration-300`}
            ></p>
            <p
              className={`w-1/5 h-[6px] ${
                formNo >= 2 ? "bg-[#009661] " : "bg-gray-300"
              }  rounded-xl transition-colors duration-300`}
            ></p>
            <p
              className={`w-1/5 h-[6px]  ${
                formNo >= 3 ? "bg-[#009661] " : "bg-gray-300"
              }   rounded-xl transition-colors duration-300`}
            ></p>
            <p
              className={`w-1/5 h-[6px] ${
                formNo >= 4 ? "bg-[#009661] " : "bg-gray-300"
              }    rounded-xl transition-colors duration-300`}
            ></p>
          </div>
          {formNo == 1 && <Form1 />}
          {formNo == 2 && <Form2 />}
          {formNo == 3 && <Form3 submitNewUser={submitNewUser} />}
          {formNo == 4 && checkFilled() && <FinalPage />}
          {/* {checkFilled() && <Form1 />} */}
        </div>
      </div>
    </div>
  );
}
