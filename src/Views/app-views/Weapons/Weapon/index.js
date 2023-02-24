import { useParams } from "react-router-dom";

import "./index.scss";
import { useWepData } from "../Weapon_Data";
import { motion } from "framer-motion";

export const Weapon = () => {
  const { wepUuid } = useParams();

  const { isLoading, data, isError } = useWepData(wepUuid);
  console.log(data?.data);
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
      <div className="weapon">
        {" "}
        <div key={data?.data.data.uuid}>
          {" "}
          <h1 className=" names"> {data?.data.data.displayName}</h1>
          <img
            alt="simge"
            className="img"
            src={data?.data.data.displayIcon}
          ></img>{" "}
          <div className="cost">
            <p>Cost :{data?.data.data.shopData.cost}</p>
          </div>
          <div className="cost">
            <p>Cateogry :{data?.data.data.shopData.categoryText}</p>
          </div>
        </div>
        <button className="title">SKİNS</button>{" "}
        <div className="skins">
          {data?.data.data.skins.map((x, i) => {
            return (
              <div key={x.uuid} className="skinss">
                <div>
                  {" "}
                  <h1 className=" names"> {x.displayName}</h1>
                </div>
                <div>
                  {" "}
                  <img alt="simge" className="imgsk" src={x.displayIcon}></img>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
