import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import makeup from "../images/laura-chouette-yxcCgzSB_iI-unsplash.jpg";
import redlips from "../images/nojan-namdar-WIF0xMq2yUo-unsplash.jpg";
import blonde from "../images/aggy-wide-B22hPKWDW3k-unsplash.jpg";
import brunnette from "../images/pouriya-kafaei-dNmmjX2Owxk-unsplash.jpg";

const Home = () => {
  useEffect(() => {
    gsap.from(".item", {
      x: -40,
      opacity: 0,
      duration: 1,
      ease: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className='container home'>
        <div className='item-image'>
          <img className='image' src={makeup} alt='makeup' />
        </div>
        <div className='item-desc'>
          <h2 className='item-title'>EyeShadow Kit</h2>
          <h3>Brand New from Revlon </h3>
          <h4>Only 29.99$</h4>
          <em>All orders over 50$ include free S&H.</em>
          <button className='cart-btn'>Add To Cart</button>
        </div>
      </div>
      <div className='container home'>
        <div className='item-desc'>
          <h3 className='item-title'>Summer 2021 New Arrivals</h3>
          <h4>All new looks for Summer</h4>
          <h5>Starting from 9.99$</h5>
          <em>All orders over 50$ include free S&H.</em>
          <button className='cart-btn'>Shop Now </button>
        </div>
        <div className='item-image'>
          <img className='image' src={redlips} alt='redlips' />
        </div>
      </div>
    </>
  );
};

export default Home;
