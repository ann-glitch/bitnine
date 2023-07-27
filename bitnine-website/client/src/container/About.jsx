import React from "react";

import MotionWrap from "../wrapper/MotionWrap";

const About = () => {
  return (
    <div className="mt-10">
      <img
        src="https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png"
        alt="agensqql diagram"
        className="mx-auto"
      />
    </div>
  );
};

export default MotionWrap(About, "bg-slate-100 w-screen");
