import React from "react";
import AboutYou from "./aboutYou";
import { useStore } from "@/useStore/store";
import Resume from "./resume";

const Form3 = ({submitNewUser}) => {
  const [updateFormNo, formNo] = useStore((store) => [
    store.updateFormNo,
    store.formNo,
  ]);

  return (
    <div className="md:px-12 pt-12 px-4 flex flex-col space-y-8">
      <AboutYou />
      <Resume/>
      <div className="flex justify-center space-x-6">
        <div
          className="border-[#009661] border px-8 py-2 hover:opacity-90 text-gray-800 font-semibold cursor-pointer  rounded-full "
          onClick={() => {
            updateFormNo(formNo - 1);
          }}
        >
          Back
        </div>
        <div
          className="bg-[#009661] px-8 py-2 text-white font-semibold cursor-pointer hover:opacity-90  rounded-full"
          onClick={() => {
           submitNewUser()
           updateFormNo(formNo+1)
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default Form3;
