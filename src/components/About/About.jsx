import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
             
              Easy-Way simplifie vos déplacements en mettant l'accent sur la sécurité, la convivialité et la durabilité. Notre plateforme intuitive permet aux conducteurs de partager leurs trajets et aux passagers de trouver facilement des places disponibles, réduisant ainsi les coûts et l'empreinte carbone. En favorisant le covoiturage, nous créons une communauté de voyageurs plus connectée, contribuant à un mode de transport plus écologique et économique.
              </p>
              <p data-aos="fade-up">
              Elle s'engage à offrir une solution pratique et fiable pour optimiser vos déplacements quotidiens ou occasionnels. Rejoignez notre réseau pour partager vos trajets en toute sécurité, réduire le trafic routier et les émissions de CO2, et découvrir une nouvelle façon responsable de voyager.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
