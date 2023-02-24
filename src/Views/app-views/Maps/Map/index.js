import { useParams } from "react-router-dom";

import { useMapData } from "../Map_Data";
import "./index.scss";
import { motion } from "framer-motion";

export const Map = () => {
  const { mapUuid } = useParams();

  const { isLoading, data, isError } = useMapData(mapUuid);
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
      <div
        className="maps-1"
        style={{
          backgroundImage: `url(${data?.data.data.splash})`,
        }}
      >
        <h1 className=" names"> {data?.data.data.displayName}</h1>{" "}
        <div className="map-card">
          {" "}
          <div className="map1" key={data?.data.data.uuid}>
            {" "}
            <img
              alt="simge"
              className="img2"
              src={data?.data.data.displayIcon}
            ></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
