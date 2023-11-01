import { useStore } from "@/useStore/store";
import React, { useState } from "react";
import { BiCode, BiCodeAlt } from "react-icons/bi";
import { FaUserCog, FaUsers } from "react-icons/fa";

const arrayEnglish = [
  "Select...",
  "Native",
  "Advanced C1/C2",
  "Intermediate B1/B2",
  "Beginner A1/A2",
];
const arrayWork = [
  "Select...",
  "0 - 3 Yrs Professional Experience",
  "3 - 8 Yrs Professional Experience",
  "8 - 12 Yrs Professional Experience",
  "12+ Yrs Professional Experience",
];
const arrayHear = [
  "Select...",
  "Job Posts",
  "Social Media",
  "Search Engine",
  "Advertising",
  "News",
  "Email",
  "In-Person Event",
  "Word of Mouth",

  "Referral by Andela",
  "Referral by Others",
  "Other",
];

const AboutYou = () => {
  const [
    workExperience,
    englishProficiency,
    hearAboutUs,
    updateWorkExperience,
    updateEnglishProficiency,
    updateHearAboutUs,
  ] = useStore((store) => [
    store.workExperience,
    store.englishProficiency,
    store.hearAboutUs,
    store.updateWorkExperience,
    store.updateEnglishProficiency,
    store.updateHearAboutUs,
  ]);

  const [english, setEnglish] = useState(englishProficiency);
  const [work, setWork] = useState(workExperience);
  const [hear, setHear] = useState(hearAboutUs);

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600   px-3 font-semibold">
        English proficiency
        </p>
        <div className="relative">
          <select
            name="country"
            id=""
            onChange={(e) => {
              setEnglish(e.target.value);
            }}
            onBlur={() => {
              updateEnglishProficiency(english);
            }}
            className="border outline-none w-full appearance-none   rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          >
            {arrayEnglish.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <BiCode
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600   px-3 font-semibold">
        Total years of work experience
        </p>

        <div className="relative">
          <select
            name="country"
            id=""
            onChange={(e) => {
              setWork(e.target.value);
            }}
            onBlur={() => {
              updateWorkExperience(work);
            }}
            className="border outline-none w-full appearance-none   rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          >
            {arrayWork.map((item) => {
              return (
                <option value={item} className="">
                  {item}
                </option>
              );
            })}
          </select>
          <FaUserCog
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600   px-3 font-semibold">
        How did you hear about us? (optional)
        </p>

        <div className="relative">
          <select
            name="country"
            id=""
            onChange={(e) => {
              setHear(e.target.value);
            }}
            onBlur={() => {
              updateHearAboutUs(hear);
            }}
            className="border outline-none w-full appearance-none   rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          >
            {arrayHear.map((item) => {
              return (
                <option value={item} className="">
                  {item}
                </option>
              );
            })}
          </select>
          <FaUsers
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutYou;
