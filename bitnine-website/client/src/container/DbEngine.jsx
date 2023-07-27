import React from "react";
import MotionWrap from "../wrapper/MotionWrap";

const DbEngine = () => {
  const items = [
    "user password policy reinforces login security",
    "excessive failed login attempts lock an account",
    "define rules for password complexity",
  ];
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">AgensSQL DB Engine</h1>
      <h2 className="font-semibold text-xl text-center underline mt-6">
        Enhanced Data Security
      </h2>
      <p className="mt-6 text-center mx-auto max-w-md text-gray-600">
        AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security and
        stability.
      </p>

      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="border w-80 h-48 bg-white shadow-md border-solid border-1 border-gray-300 rounded-lg transition-all duration-1000 ease-in-out">
          <img
            src="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
            alt="password-profile"
            className="w-60 mx-auto mt-2"
          />
        </div>
        <div className="border w-80 h-48 bg-white shadow-md border-solid border-1 border-gray-300 rounded-lg transition-all duration-1000 ease-in-out">
          <img
            src="https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png"
            alt="data redaction"
            className="w-60 mx-auto mt-2"
          />
        </div>
        <div className="border w-80 h-48 bg-white shadow-md border-solid border-1 border-gray-300 rounded-lg transition-all duration-1000 ease-in-out">
          <img
            src="https://bitnine.net/wp-content/uploads/2022/04/Auditing.png"
            alt="auditing"
            className="w-60 mx-auto mt-2"
          />
        </div>
        {/* <ul className="list-disc pl-6 opacity-0 absolute top-0 left-0 w-full h-full bg-white shadow-md rounded-md p-4 transition-opacity duration-300">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div> */}
      </div>
    </div>
  );
};

export default MotionWrap(DbEngine, "bg-slate-100 w-screen h-screen");
