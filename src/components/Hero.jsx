import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
 const aliens = [
  `${import.meta.env.BASE_URL}images/alien1.png`,
  `${import.meta.env.BASE_URL}images/alien2.png`,
  `${import.meta.env.BASE_URL}images/alien3.png`,
  `${import.meta.env.BASE_URL}images/alien4.png`,
  `${import.meta.env.BASE_URL}images/alien5.png`,
  `${import.meta.env.BASE_URL}images/alien6.png`,
];

  const repeatedAliens = [...aliens, ...aliens, ...aliens];

  return (
    <div className="hero">
      <Navbar />

      <motion.div
        className="alien-slider"
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }} 
      >
        {repeatedAliens.map((src, i) => (

<motion.div className="alien-card" key={i}>
<img src={src} alt={`Alien ${i + 1}`} />
</motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
