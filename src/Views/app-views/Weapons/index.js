import "./index.scss";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Weapons = () => {
  const [weapon, setWeapon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://valorant-api.com/v1/weapons`)
      .then((response) => {
        setWeapon(response.data.data);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="weapons">
      <div className="weapon-card">
        {weapon.map((x, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              key={x.uuid}
            >
              <Link to={`/weapons/${x.uuid}`}>
                <div className="map">
                  <div>
                    {" "}
                    <h1 className=" names"> {x.displayName}</h1>
                  </div>
                  <div className="icons">
                    <img alt="simge" className="img" src={x.displayIcon}></img>{" "}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Weapons;
