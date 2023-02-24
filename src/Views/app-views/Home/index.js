import React from "react";

import "./index.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="home"
      >
        <img
          className="logo"
          alt="logo"
          src={process.env.PUBLIC_URL + "/images/valo.png"}
        ></img>
      </motion.div>
    </div>
  );
};

export default Home;
