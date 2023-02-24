import { useQuery } from "react-query";
import axios from "axios";

const fetchAgent = (agentUuid) => {
  return axios.get(`https://valorant-api.com/v1/agents/${agentUuid}`);
};

export const useAgentData = (agentUuid) => {
  return useQuery(["agent", agentUuid], () => fetchAgent(agentUuid));
};
