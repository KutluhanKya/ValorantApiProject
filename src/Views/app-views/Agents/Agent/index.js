import { React } from "react";

import { useParams } from "react-router-dom";

import "./index.scss";
import { useAgentData } from "../Agent_Data";
import { motion } from "framer-motion";

const Agent = () => {
  const { agentUuid } = useParams();

  const { isLoading, data, isError } = useAgentData(agentUuid);
  console.log(data?.data.data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>ERROR</h2>;
  }

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="bg">
        <div key={data?.data.data.uuid} className="agent">
          {" "}
          <div className="agent-card">
            <div className="name">
              {" "}
              <p>{data?.data.data.displayName}</p>
            </div>
            <div className="images">
              <div
                style={{
                  backgroundImage: `url(${data?.data.data.background})`,
                }}
              >
                {" "}
                <img
                  alt="simge"
                  className="img"
                  src={data?.data.data.bustPortrait}
                ></img>
              </div>{" "}
            </div>{" "}
            <div className="agent">
              <div className="ab">
                {data?.data.data.abilities.map((x) => {
                  return (
                    <div key={x.uuid} className="skills">
                      <div></div>
                      <div>
                        {" "}
                        <h1 className=" names"> {x.displayName}</h1>
                      </div>
                      <div>
                        {" "}
                        <img
                          alt="simge"
                          className="imgsk"
                          src={x.displayIcon}
                        ></img>
                      </div>{" "}
                      <div className="des">
                        <p>{x.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Agent;
