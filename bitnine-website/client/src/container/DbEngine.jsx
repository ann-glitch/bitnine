import React from "react";
import MotionWrap from "../wrapper/MotionWrap";

const DbEngine = () => {
  const cardsContent = [
    {
      text: [
        "- user password policy reinforces login",
        "- excessive failed login attempts lock an account",
        "- define rules for password complexity",
      ],
      img_src:
        "https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png",
    },
    {
      text: [
        "- enhanced data security of user personal information",
        "- resolve privacy issues in preparation for security audits",
        "- encryption or masking with unidentifiable special characters",
      ],
      img_src:
        "https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png",
    },
    {
      text: [
        "- monitors database activities and collects data",
        "- traces object accessed or DDL & DML statements executed by a user",
        "- records all actions in logs",
      ],
      img_src: "https://bitnine.net/wp-content/uploads/2022/04/Auditing.png",
    },
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
        {cardsContent.map((card) => {
          return (
            <div className="relative border w-80 h-48 bg-white shadow-md border-solid border-1 border-gray-300 rounded-lg mt-8 hover:border-sky-500">
              <img
                src={card.img_src}
                alt="db engines"
                className="w-60 mx-auto mt-2 object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <ul className="absolute top-0 left-0 w-full h-full p-4 bg-white text-gray-700 text-sm opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center flex-col shadow-md rounded-lg">
                {card.text.map((line) => {
                  return <li>{line}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MotionWrap(DbEngine, "bg-slate-100 w-screen h-screen");
