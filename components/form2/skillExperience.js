import { useStore } from "@/useStore/store";
import React, { useState } from "react";
const arrayExp = [
  "<1 Year",
  "1 - 2 Years",
  "3 - 5 Years",
  "6 - 10 Years",
  ">10 Years",
];

const SkillExperience = () => {
    const [updateSkillExperience,skillExperience] = useStore((store) => [store.updateSkillExperience,store.skillExperience]);
  const [exp, setExp] = useState(skillExperience);

  return (
    <div className="flex flex-col space-y-12">
      <p className="text-gray-800 text-center text-xl px-3 font-normal">
        Years of experience with this skill
      </p>
      <div className="flex justify-around">
        {arrayExp.map((item) => {
          return (
            <div
              className={`${exp == item ? "border-green-600" : "border-gray-200"} border rounded cursor-pointer text-gray-600 font-normal px-4 py-2  `}
              onClick={() => {
                setExp(item)
                updateSkillExperience(item)
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillExperience;
