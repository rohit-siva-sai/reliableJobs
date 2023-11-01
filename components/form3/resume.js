import { storage } from "@/config/firebase";
import { useStore } from "@/useStore/store";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { FiLoader, FiUpload } from "react-icons/fi";

const Resume = () => {
  const [resume, updateResume, username] = useStore((store) => [
    store.resume,
    store.updateResume,
    store.username,
  ]);
  const [rand,setRand] = useState(null)
  const [loading, setLoading] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);

  const handleChange = (e) => {
    setFileUpload(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };
  const [fileList, setFileList] = useState([]);

  const uploadFile = async (file) => {
    setLoading(true);
    const fileUpload = file;
    if (!fileUpload) {
      setLoading(false);
      return;
    }
    console.log("ssaass");

    const fileFolderRef = ref(
      storage,
      `resumes/${fileUpload.name + username.firstName}`
    );
    // try {
    //   await uploadBytes(fileFolderRef, fileUpload);
    // } catch (err) {
    //   console.error(err);
    // }
    // console.log('dsds',fileFolderRef);

    uploadBytes(fileFolderRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
    setRand(Math.random())
    //   change()
    setLoading(false);
    // getFile();
  };

  const fileref = ref(storage, "resumes/");

//   const getFile = () => {
//     console.log("sasdjhdsjhv");

//     listAll(fileref).then((res) => {
//       res.items.forEach((item) => {
//         // console.log("item", item);

//         getDownloadURL(item).then((url) => {
//           setFileList((prev) => [...prev, url]);
//           console.log('url',url);
          
//           updateResume(url)
//         });
//       });
//     });
//     change();
//     console.log("sasdjhdsjhv");
//   };

    useEffect(() => {
        console.log('random');
        
      listAll(fileref).then((res) => {
        res.items.forEach((item) => {
          // console.log("item", item);

          getDownloadURL(item).then((url) => {
            updateResume(url);
            setFileList((prev) => [...prev, url]);
          });
        });
      });
      setLoading(false);

    }, [rand]);

  const change = () => {
    console.log("chage",fileList);

    let dup = fileList;
    dup = dup.filter((item, index) => dup.indexOf(item) === index);
    console.log("du,dupp,dupdup", dup);

    // setFileList(dup);
    updateResume(dup);
    // setLoading(false);
  };
  console.log("fiel", fileUpload);
  console.log("filelist", fileList);

  return (
    <div>
      <div className="flex flex-col space-y-4">
        <div className="flex  space-x-2 items-center">
          <div className=" px-3 ">
            <p className="text-gray-600  font-semibold">Upload your resume</p>
            <p className="text-xs font-semibold text-orange-400 ">
              Only PDF files are accepted
            </p>
          </div>
          {loading && (
            <FiLoader size={22} className="text-gray-600 animate-spin " />
          )}
        </div>
        <div className="relative">
          <div
            className="border border-dashed cursor-pointer relative rounded-md border-green-500"
            // onClick={() => {
            //   fileUpload && uploadFile(fileUpload);
            // }}
          >
            <input
              type="file"
              name=""
              id=""
              accept="application/pdf"
              className=" z-50 w-full border cursor-pointer opacity-0 py-3 "
              onChange={handleChange}
            />
          </div>
          <div className="absolute top-3 -z-10 opacity-50 left-14">
            {!fileUpload && (
              <p className="font-medium text-gray-400 text-lg">
                Click to add File
              </p>
            )}
            {fileUpload && (
              <p className="font-medium  overflow-x-hidden w-full  text-gray-400 text-lg">
                {fileUpload.name}
              </p>
            )}
          </div>
          <FiUpload
            className="text-gray-400 absolute top-4 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
