import { useStore } from "@/useStore/store";
import React, { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";

const arrayRole = [
    "Select...",
 "Web Developer",
 "Data Scientist",
 "Cloud Architect",
 "Backend Developer",
 "Software Engineer"
];
const arraySkill = [
    "Select...",
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Web Design",
    "Version Control (e.g., Git)",
    "Front-end Frameworks (e.g., React, Angular, or Vue)",
    "Web Development Tools (e.g., Webpack, Babel)",
    "APIs and RESTful Services",
    "Browser Developer Tools",
    "Basic UX/UI Design",
    "Programming Languages (e.g., Java, Python, C++, etc.)",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Software Design Patterns",
    "Debugging and Profiling",
    "Database Management",
    "Software Development Life Cycle (SDLC)",
    "Testing and Test Automation",
    "Security Best Practices",
    "Cloud Platforms (e.g., AWS, Azure, GCP)",
    "Infrastructure as Code (e.g., Terraform, CloudFormation)",
    "Networking and Security in the Cloud",
    "Cloud Services (e.g., EC2, S3, Azure VMs)",
    "Scalability and High Availability",
    "Cloud Cost Management",
    "DevOps Practices",
    "Knowledge of Containers (e.g., Docker, Kubernetes)",
    "Monitoring and Logging",
    "Cloud Compliance and Governance",
    "Server-Side Programming (e.g., Node.js, Python, Java)",
    "Database Management (e.g., SQL, NoSQL)",
    "API Development",
    "Authentication and Authorization",
    "Web Servers (e.g., Apache, Nginx)",
    "Caching Strategies",
    "Microservices Architecture",
    "RESTful and GraphQL APIs",
    "Security Best Practices",
    "Programming Languages (e.g., Python, R)",
    "Data Analysis and Visualization",
    "Machine Learning Algorithms",
    "Data Cleaning and Preprocessing",
    "Statistical Analysis",
    "Big Data Technologies (e.g., Hadoop, Spark)",
    "Database Management (e.g., SQL, NoSQL)",
    "Data Mining",
    "Data Modeling",
    "Data Ethics and Privacy",
  ];
  

const Primary = () => {
  const [primaryRole, primarySkill, updatePrimaryRole, updatePrimarySkill] =
    useStore((store) => [
      store.primaryRole,
      store.primarySkill,
      store.updatePrimaryRole,
      store.updatePrimarySkill,
    ]);

  const [role, setRole] = useState(primaryRole);
  const [skill, setSkill] = useState(primarySkill);

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-4">
        <p className="text-gray-800 text-center text-xl px-3 font-normal">
          Select Your <span className="text-green-600">Primary</span> Role{" "}
        </p>
        <div className="relative">
          <select
            name="country"
            id=""
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            onBlur={() => {
              updatePrimaryRole(role);
            }}
            className="border outline-none w-full appearance-none   rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          >
            {arrayRole.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <BiCodeAlt
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-800 text-xl px-3 text-center font-normal">
          Select Your <span className="text-green-600">Primary</span> Skill{" "}
        </p>

        <div className="relative">
          <select
            name="country"
            id=""
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
            onBlur={() => {
              updatePrimarySkill(skill);
            }}
            className="border outline-none w-full appearance-none   rounded-md py-3 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          >
            {arraySkill.map((item) => {
              return <option value={item} className=""  >{item}</option>;
            })}
          </select>
          <BiCodeAlt
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Primary;
