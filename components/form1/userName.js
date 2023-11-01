import { useStore } from "@/useStore/store";
import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const UserName = () => {
  const [updateUserName, username] = useStore((store) => [
    store.updateUserName,
    store.username,
  ]);

  const [name, setName] = useState(username);
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600 px-3 font-semibold">First Name</p>
        <div className="relative">
          <input
            type="text"
            name="firstName"
            value={name.firstName}
            id=""
            onChange={(e) => {
              setName({ ...name, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              updateUserName(name);
            }}
            placeholder=""
            className="border outline-none w-full  rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <FaUser
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600 px-3 font-semibold">Last Name</p>
        <div className="relative">
          <input
            type="text"
            name="lastName"
            value={name.lastName}
            id=""
            onChange={(e) => {
              setName({ ...name, [e.target.name]: e.target.value });
            }}
            placeholder=""
            onBlur={() => {
              updateUserName(name);
            }}
            className="border outline-none w-full  rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <FaUser
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default UserName;
