import axios from "axios";
import { SelectedCountry, RawResponse } from "../../../types/types";

export function fetchCharitiesByCountry(selectedCountry: SelectedCountry, id: number): Promise<RawResponse> {
  return axios.get(
    `https://api.globalgiving.org/api/public/projectservice/countries/${selectedCountry["value"]}/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=${id}`
  );
}
