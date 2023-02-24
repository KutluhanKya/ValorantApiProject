import axios from "axios";
import { useQuery } from "react-query";

const fetchWep = (wepUuid) => {
  return axios.get(`https://valorant-api.com/v1/weapons/${wepUuid}`);
};

export const useWepData = (wepUuid) => {
  return useQuery(["wep", wepUuid], () => fetchWep(wepUuid));
};
