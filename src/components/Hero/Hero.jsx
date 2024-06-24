import React, { useEffect } from "react";
import carPng from "../../assets/car.jpg";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="hero-container dark:bg-black dark:text-white duration-300 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div
            className="order-1 sm:order-2"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative z-0 max-h-[600px] sm:max-h-full sm:w-full drop-shadow-[2px 20px 6px rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 sm:pr-32">
            <p
              data-aos="fade-up"
              className="text-primary text-2xl font-serif"
            >
              Effortless Carpooling with Easy-Way
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
