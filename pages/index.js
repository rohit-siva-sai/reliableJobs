import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserName from "@/components/home/userName";
import { useStore } from "@/useStore/store";
import PhoenEmail from "@/components/home/phoneEmail";
import Country from "@/components/home/country";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ submitNewUser }) {
  const router = useRouter();
  

  return (
    <div className={`${inter.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="bg-[#009661] md:flex hidden sticky top-0 max-h-screen px-8  flex-col  justify-evenly   items-center ">
          <p className="text-white text-4xl font-semibold ">uptal.</p>
          <picture>
            <img
              src="https://uptaltalent.web.app/static/media/talent-guy-1.48a0a876998025c9c184.png"
              alt=""
              className="h-[380px] "
            />
          </picture>
          <div className="text-center ">
            <p className="text-green-300 font-medium text-3xl">Reliable jobs</p>
            <p className="text-white font-medium">
              We only work with trusted, vetted companies. Our team works
              globally to eliminate fraud or illegal activity, ensuring the jobs
              you apply for are safe and secure.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <p className="w-2 h-2 rounded-full bg-orange-300"></p>
            <p className="w-2 h-2 rounded-full bg-gray-200"></p>
            <p className="w-2 h-2 rounded-full bg-gray-200"></p>
            <p className="w-2 h-2 rounded-full bg-gray-200"></p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col  md:px-20 px-4 py-16 ">
          <div className="flex justify-between">
            <p className="w-1/5 h-[6px] bg-[#009661]  rounded-xl"></p>
            <p className="w-1/5 h-[6px] bg-gray-300  rounded-xl"></p>
            <p className="w-1/5 h-[6px] bg-gray-300  rounded-xl"></p>
            <p className="w-1/5 h-[6px] bg-gray-300  rounded-xl"></p>
          </div>
          <div className="md:px-12 px-4 flex flex-col space-y-6">
            <p className="text-xl text-gray-600 pt-16  pb-8 ">
              Becoming a{" "}
              <span className="text-[#009661]">
                part of our global community{" "}
              </span>{" "}
              has never been easier
            </p>
            <UserName />
            <PhoenEmail />
            <Country />
            <div
              className="bg-[#009661] px-4 py-2 text-white font-semibold cursor-pointer  rounded-full mx-auto"
              onClick={() => {
                submitNewUser();
              }}
            >
              Get Started
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
