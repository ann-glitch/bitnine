import React from "react";
import MotionWrap from "../wrapper/MotionWrap";

const Features = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div>
        <h1 className="font-bold text-center text-2xl">Key features</h1>
        <p className="text-center text-gray-600 mt-4">
          Manage your data with Agens Enterprise Package
        </p>
        <p className="text-center text-gray-600">
          Essential enterprise features such as high availability and sharding
          are provided
        </p>
      </div>
      <img
        src="https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng.png"
        alt="keyfeatures"
        className="mt-8 mx-auto w-full"
      />
    </div>
  );
};

export default MotionWrap(Features, "bg-white h-screen w-screen");
