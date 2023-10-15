import axios from "axios";
import { RawResponse } from "../../../types/types";

export function fetchAllCharities(id: number): Promise<RawResponse> {
  return axios.get(
    `https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
  );
}
