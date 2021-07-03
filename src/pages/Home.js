import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import makeup from "../images/laura-chouette-yxcCgzSB_iI-unsplash.jpg";
import redlips from "../images/nojan-namdar-WIF0xMq2yUo-unsplash.jpg";

const Home = () => {
  useEffect(() => {
    gsap.from(".item", {
      x: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
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
          <h2 className='item-title item'>EyeShadow Kit</h2>
          <h3 className='item '>Brand New from Revlon</h3>
          <h4 className='item'>Only 29.99$</h4>
          <em className='item'>All orders over 50$ include free S&H.</em>
          <button className='cart-btn item'>Add To Cart</button>
        </div>
      </div>
      <div className='container home'>
        <div className='item-desc'>
          <h3 className='item-title item'>Summer 2021 New Arrivals</h3>
          <h4 className='item '>All new looks for Summer</h4>
          <h5 className='item'>Starting from 9.99$</h5>
          <em className='item'>All orders over 50$ include free S&H.</em>
          <button className='cart-btn item'>Shop Now </button>
        </div>
        <div className='item-image'>
          <img className='image' src={redlips} alt='redlips' />
        </div>
      </div>
    </>
  );
};

export default Home;
