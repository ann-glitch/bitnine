import React from "react";
import MotionWrap from "../wrapper/MotionWrap";
// import AppWrap from "../wrapper/AppWrap";

const Header = () => {
  return (
    <header className="max-w-2xl mx-auto">
      <img
        src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png"
        alt="agensql logo"
        className="mx-auto"
      />
      <h1 className="font-bold text-center mt-10 text-xl">
        An integration of Bitnine's DB technology and PG expertise
      </h1>
      <p className="text-center mt-8 text-gray-600">
        AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
        of expertise and knowledge accumulated through database research and
        development.
      </p>
      <p className="text-center mt-8 text-gray-600">
        The enterprise package, along with AgensSQL engine, is an all-in-one
        solution that ensures the efficiency and scalability of data management.
      </p>
      <p className="text-center mt-8 text-gray-600">
        Get AgensSQL now for stable operation and management services at a
        reduced maintenance cost.
      </p>

      <div className="flex items-center justify-center gap-12">
        <button className="bg-primary text-white font-semibold uppercase px-3 py-2 mt-4 rounded-sm hover:text-yellow-500">
          <a href="https://bitnine.net/ko/contact/">Contact</a>
        </button>
        <button className="bg-primary text-white font-semibold uppercase px-3 py-2 mt-4 rounded-sm hover:text-yellow-500">
          <a href="https://bitnine.net/agenssql_brochure_ko/">Brochure</a>
        </button>
        <button className="bg-primary text-white font-semibold uppercase px-3 py-2 mt-4 rounded-sm hover:text-yellow-500">
          <a
            href="https://blog.naver.com/bitnineglobal/222785715055"
            target="_blank"
            rel="noreferrer">
            Blog
          </a>
        </button>
      </div>
    </header>
  );
};

export default MotionWrap(Header, "bg-white h-screen w-screen");
