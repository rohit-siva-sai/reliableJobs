import React from "react";
import Primary from "./primary";

import { useStore } from "@/useStore/store";
import SkillExperience from "./skillExperience";

const Form2 = () => {
    const [updateFormNo,formNo] = useStore((store) => [store.updateFormNo,store.formNo]);
  return (
    <div className="md:px-12 pt-20 px-4 flex flex-col space-y-16">
      <Primary />
      <SkillExperience />
      <div className="flex justify-center space-x-6">
        <div
          className="border-[#009661] border px-8 py-2 hover:opacity-90 text-gray-800 font-semibold cursor-pointer  rounded-full "
          onClick={() => {
              updateFormNo(formNo-1)
          }}
        >
          Back
        </div>
        <div
          className="bg-[#009661] px-8 py-2 text-white font-semibold cursor-pointer hover:opacity-90  rounded-full"
          onClick={() => {
              updateFormNo(formNo+1)
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Form2;
