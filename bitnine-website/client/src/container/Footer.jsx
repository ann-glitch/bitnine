import React from "react";
import MotionWrap from "../wrapper/MotionWrap";
import {
  BsGithub,
  BsLinkedin,
  BsYoutube,
  BsFacebook,
  BsMedium,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Agens Enterprise Package
        </h1>
        <p className="text-center max-w-4xl mt-6 text-gray-500">
          Agens Enterprise Package comes with a high availability management
          server that supports backup and data monitoring dashboard that helps
          enterprise customers manage their data efficiently.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 max-w-5xl mt-6">
        <div>
          <h1 className="text-xl font-bold text-center">Agens HA Manager</h1>
          <h2 className="mt-4 mb-5 text-lg">
            <span className="font-bold text-sky-500 text-xl">
              HA Clustering
            </span>{" "}
            - Failover/Failback, Load-balancing
          </h2>
          <img
            src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png"
            alt="agensHAmnager"
            className="w-11/12"
          />
        </div>
        <section className="w-500 h-50 rounded-8 flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold content-center">
            Agens Enterprise Manager
          </h1>
          <div className="group [perspective:1000px]">
            <div className="flex items-center rounded-md justify-center border-2 border-sky-600 bg-white text-sky-600 relative w-96 h-28 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] mt-6">
              Backup/Restore
              <div className="absolute inset-0 rounded-md text-white bg-sky-600 px-4 py-2 [transform:rotateY(180deg)] [backface-visiblity:hidden]">
                <p>provides a convenient interface for backup & restore</p>
                <p>
                  provides backup & restore features for DB and table objects
                </p>
              </div>
            </div>
            <div className="w-96 h-20 flex items-center justify-center rounded-md border-2 border-sky-600 text-sky-600 mt-4">
              DB Monitoring Dashboard
            </div>
            <div className="w-96 h-20 flex items-center justify-center rounded-md border-2 border-sky-600 text-sky-600 mt-4">
              Schedule Management
            </div>
            <div className="w-96 h-20 flex items-center justify-center rounded-md border-2 border-sky-600 text-sky-600 mt-4">
              Database Audit
            </div>
            <div className="w-96 h-20 flex items-center justify-center rounded-md border-2 border-sky-600 text-sky-600 mt-4 ">
              SQL Monitoring
            </div>
            <div className="w-96 h-20 flex items-center justify-center rounded-md border-2 border-sky-600 text-sky-600 mt-4">
              Performance Management
            </div>
          </div>
        </section>
      </div>
      <ul className="flex items-center justify-between mt-32">
        <li className="font-semibold text-gray-500">
          PRODUCTS
          <ul className="text-gray-500 font-normal">
            <li>Relational Database</li>
            <li>Graph Database</li>
            <li>Graph-based Solution</li>
          </ul>
        </li>
        <li className="font-semibold text-gray-500">USECASES</li>
        <li className="font-semibold text-gray-500">SERVICES</li>
        <li className="font-semibold text-gray-500">
          RESOURCES
          <ul className="text-gray-500 font-normal">
            <li>Documentation</li>
            <li>Learn</li>
          </ul>
        </li>
        <li className="font-semibold text-gray-500">BLOG</li>
        <li className="font-semibold text-gray-500">
          COMPANY
          <ul className="text-gray-500 font-normal">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </li>
      </ul>
      <div className="flex items-center justify-around mt-28 text-gray-500">
        <p>&copy; 2023 by Bitnine Global Inc. All Rights Reserved.</p>
        <div className="flex items-center justify-between gap-5">
          <div>
            <a
              href="https://github.com/apache/incubator-age"
              target="_blank"
              rel="noreferrer">
              <BsGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/bitninesns/"
              target="_blank"
              rel="noreferrer">
              <BsFacebook />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/bitnineglobal"
              target="_blank"
              rel="noreferrer">
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber"
              target="_blank"
              rel="noreferrer">
              <BsYoutube />
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/agensgraph"
              target="_blank"
              rel="noreferrer">
              <BsMedium />
            </a>
          </div>

          <p className="uppercase">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default MotionWrap(Footer, "w-screen mt-20");
