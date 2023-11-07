import { useStore } from "@/useStore/store";
import React from "react";

const Uptal = () => {
  const [updateFormNo, formNo] = useStore((store) => [
    store.updateFormNo,
    store.formNo,
  ]);  
  return (
    <>
      {formNo == 4 && (
        <picture>
          <img
            src="https://uptaltalent.web.app/static/media/sidebar.0728b706154dc1303798.png"
            alt=""
            className=" md:block hidden  h-screen"
          />
        </picture>
      )}
     {!(formNo==4) && <div className="bg-[#009661] md:flex hidden sticky top-0 h-screen px-8  flex-col  justify-evenly   items-center ">
        {!(formNo == 4) && (
          <p className="text-white text-4xl font-semibold ">uptal.</p>
        )}
        {formNo == 1 && (
          <picture>
            <img
              src="https://uptaltalent.web.app/static/media/talent-guy-1.48a0a876998025c9c184.png"
              alt=""
              className="h-[380px] "
            />
          </picture>
        )}
        {formNo == 2 && (
          <picture>
            <img
              src="https://uptaltalent.web.app/static/media/talent-guy-2.e23cd9095fce00b7b81e.png"
              alt=""
              className="h-[300px] "
            />
          </picture>
        )}
        {formNo == 3 && (
          <picture>
            <img
              src="https://uptaltalent.web.app/static/media/talent-lady-3.6b36b6ccffb4488b1577.png"
              alt=""
              className="h-[280px] "
            />
          </picture>
        )}

        {formNo == 1 && (
          <div className="text-center ">
            <p className="text-green-300 font-medium text-3xl">Reliable jobs</p>
            <p className="text-white font-medium">
              We only work with trusted, vetted companies. Our team works
              globally to eliminate fraud or illegal activity, ensuring the jobs
              you apply for are safe and secure.
            </p>
          </div>
        )}
        {formNo == 2 && (
          <div className="text-center ">
            <p className="text-green-300 font-medium text-3xl">
              Work from anywhere
            </p>
            <p className="text-white font-medium">
              Fully remote, forever. With remote roles across multiple time
              zones, you choose where and when you work, creating a healthy,
              flexible work-life balance.
            </p>
          </div>
        )}
        {formNo == 3 && (
          <div className="text-center ">
            <p className="text-green-300 font-medium text-3xl">
              Fully supported
            </p>
            <p className="text-white font-medium">
              Wherever you are and whatever issues you may face, we're here to
              help solve any challenges, fast!
            </p>
          </div>
        )}
        <div className="flex justify-center space-x-4">
          <p
            className={`w-2 h-2 rounded-full ${
              formNo == 1 ? "bg-orange-300" : "bg-gray-200"
            } `}
          ></p>
          <p
            className={`w-2 h-2 rounded-full ${
              formNo == 2 ? "bg-orange-300" : "bg-gray-200"
            } `}
          ></p>
          <p
            className={`w-2 h-2 rounded-full ${
              formNo == 3 ? "bg-orange-300" : "bg-gray-200"
            } `}
          ></p>
          <p
            className={`w-2 h-2 rounded-full ${
              formNo == 4 ? "bg-orange-300" : "bg-gray-200"
            } `}
          ></p>
        </div>
      </div>}
    </>
  );
};

export default Uptal;
