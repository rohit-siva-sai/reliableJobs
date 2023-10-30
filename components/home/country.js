import { useStore } from "@/useStore/store";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

import { useState } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "France",
  "Germany",
  "Japan",
  "Brazil",
  "China",
  "India",
  "South Africa",
  "Mexico",
  "Italy",
  "Spain",
  "Argentina",
  "Russia",
  "Sweden",
  "South Korea",
  "Egypt",
  "Turkey",
];

const Country = () => {
  const [updateCountry, country] = useStore((store) => [
    store.updateCountry,
    store.country,
  ]);

  const [coun, setCoun] = useState(country);
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600 px-3 font-semibold">Country</p>
        <div className="relative">
          <select
            name="country"
            id=""
            onChange={(e) => {
              setCoun(e.target.value);
            }}
            onBlur={() => {
              updateCountry(coun);
            }}
            className="border outline-none w-full appearance-none   rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          >
            {countries.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <HiLocationMarker
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 px-3">
        <div className="flex items-center space-x-2">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-500 font-medium text-xs">I agree to Andela's <span className="text-gray-900">Terms & Conditions</span> </p>
        </div>
        <div className="flex items-start space-x-2">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-500 font-medium text-xs">I understand that Andela will process my information in accordance with their<span className="text-gray-900"> Privacy Policy.</span> I may withdraw my consent through unsubscribe links at any time. </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
