import { useQuery } from "react-query";
import axios from "axios";

const fetchMap = (mapUuid) => {
  return axios.get(`https://valorant-api.com/v1/maps/${mapUuid}`);
};

export const useMapData = (mapUuid) => {
  return useQuery(["map", mapUuid], () => fetchMap(mapUuid));
};
