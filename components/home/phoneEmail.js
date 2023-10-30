import { useStore } from "@/useStore/store";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { MdEmail } from "react-icons/md";

const PhoenEmail = () => {
  const [updatePhoneNumber, phoneNumber, updateEmail, email] = useStore(
    (store) => [
      store.updatePhoneNumber,
      store.phoneNumber,
      store.updateEmail,
      store.email,
    ]
  );

  const [phone, setPhone] = useState(phoneNumber);
  const [mail, setMail] = useState(email);
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600 px-3 font-semibold">Phone Number</p>
        <div className="relative">
          <PhoneInput
            placeholder=""
            defaultCountry="IN"
            autoFocus
            value={phone}
            // ref={refPhone}
            onChange={setPhone}
            onBlur={() => {
              updatePhoneNumber(phone);
            }}
            className="border outline-none rounded-md   px-4 py-3 text-gray-500 focus:border-blue-600 border-green-600 "
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600 px-3 font-semibold">Email</p>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={mail}
            id=""
            onChange={(e) => {
              setMail(e.target.value);
            }}
            placeholder=""
            onBlur={() => {
              updateEmail(mail);
            }}
            className="border outline-none w-full  rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <MdEmail
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={28}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoenEmail;
