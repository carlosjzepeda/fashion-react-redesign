import React, { useEffect } from "react";
import Marquee from "../components/Marquee";
import { Link } from "react-router-dom";
import gsap from "gsap";
import meganfull from "../images/meganfull.png";

const Entry = () => {
  useEffect(() => {
    gsap.from(".animate-entry", {
      duration: 1,
      stagger: 0.5,
      opacity: 0,
      y: 50,
      transform: "scale(1.5)",
      ease: "power4",
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".megan-full",
      {
        filter: "drop-shadow(0px 0px 0px #000000)",
      },
      {
        filter: "drop-shadow(15px 15px 10px #000000)",
        delay: 1.25,
        duration: 1,
        ease: "power4",
      }
    );
  }, []);

  return (
    <div className='container entry'>
      <Marquee />
      <Marquee />

      <img
        src={meganfull}
        className='animate-entry megan-full'
        alt='Megan The Stallion'
      />
      <Link exact to='/'>
        <button className='animate-entry'>ENTER</button>
      </Link>
    </div>
  );
};

export default Entry;
