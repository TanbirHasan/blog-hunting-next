import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="text-5xl text-bold my-5 text-center">About Us</h2>
      <div className="text-center">
        <Image
          src="/bestblogsites.png"
          className="mx-auto"
          width="600"
          height="400"
          alt="blog"
        />
      </div>
    </div>
  );
};

export default About;
