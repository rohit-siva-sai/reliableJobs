import React from "react";
import UserName from "./userName";
import PhoenEmail from "./phoneEmail";
import Country from "./country";
import { useStore } from "@/useStore/store";

const Form1 = () => {
  const [updateFormNo,formNo] = useStore((store) => [store.updateFormNo,store.formNo]);
  return (
    <div className="md:px-12 px-4 flex flex-col space-y-6">
      <p className="text-xl text-gray-600 pt-16  pb-8 ">
        Becoming a{" "}
        <span className="text-[#009661]">part of our global community </span>{" "}
        has never been easier
      </p>
      <UserName />
      <PhoenEmail />
      <Country />
      <div
        className="bg-[#009661] px-4 py-2 text-white font-semibold cursor-pointer  rounded-full mx-auto"
        onClick={() => {
          updateFormNo(formNo+1)
        }}
      >
        Get Started
      </div>
    </div>
  );
};

export default Form1;
