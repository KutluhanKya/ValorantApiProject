import "./index.scss";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Maps = () => {
  const [map, setMap] = useState([]);

  useEffect(() => {
    axios
      .get(`https://valorant-api.com/v1/maps`)
      .then((response) => {
        setMap(response.data.data);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="maps">
      <div className="map-card">
        {map.map((x, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              key={x.uuid}
            >
              <Link to={`/maps/${x.uuid}`}>
                <div className="map">
                  <div>
                    {" "}
                    <h1 className=" names"> {x.displayName}</h1>
                  </div>
                  <div className="icons">
                    <img alt="simge" className="img" src={x.splash}></img>{" "}
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

export default Maps;
