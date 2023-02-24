import "./index.scss";
import axios from "axios";
import { React } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Agents = () => {
  const { data, isLoading, isError } = useQuery("agent", () => {
    return axios
      .get(`https://valorant-api.com/v1/agents`)
      .then((response) => response.data.data);
  });
  console.log(data);
  if (isLoading) {
    return <p className="text-white mt-28">LOADİNG ...</p>;
  }

  if (isError) {
    return <p className="text-white mt-28">ERROR..</p>;
  }

  return (
    <div className="agents">
      {" "}
      <motion.div className="agent-card">
        {" "}
        {data?.map((x, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              key={x.uuid}
            >
              <Link to={`/agents/${x.uuid}`}>
                <div className="agent">
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
      </motion.div>
    </div>
  );
};

export default Agents;
