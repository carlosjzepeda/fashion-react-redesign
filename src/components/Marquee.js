import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const marqueeTexts = [
  "REVLON REVLON REVLON",
  "MEGAN THEE STALLION",
  "AVAILABLE NOW 7/82/21",
];

const Marquee = () => {
  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const marqueeTween = useRef();

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const marqueeInitialSet = () => {
      gsap.set(marqueeElements.current, {
        xPercent: -100,
        x: function (index) {
          return (screenWidth / 2) * index;
        },
      });
    };
    marqueeInitialSet();
    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `+=${screenWidth * 1.5}`,
      ease: "none",
      repeat: -1,
      duration: 10,
      rotation: 0.1,
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % (screenWidth * 1.5)) + "px";
        },
      },
    });
  }, [screenWidth]);

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }
    return marqueeTexts.map((e, i) => (
      <p
        className='marquee-text'
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}>
        {e}
      </p>
    ));
  };
  return (
    <>
      <div className='marquee'>{renderMarqueeElements()}</div>
    </>
  );
};

export default Marquee;
