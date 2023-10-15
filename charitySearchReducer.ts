import { Charity, SelectedCountry, MappedResponse } from "../../../types/types";

interface State {
  selectedCountry: SelectedCountry;
  nextId: number;
  charities: Charity[] | null;
}

type Action =
  | { type: "CHANGE_SELECTED_COUNTRY"; payload: SelectedCountry }
  | { type: "FETCH_NEW_DATA_START" }
  | { type: "FETCH_NEW_DATA_SUCCESS"; payload: MappedResponse };

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "CHANGE_SELECTED_COUNTRY":
      return {
        ...state,
        selectedCountry: action.payload
      };
    case "FETCH_NEW_DATA_START":
      return {
        ...state,
        charities: []
      };
    case "FETCH_NEW_DATA_SUCCESS":
      return {
        ...state,
        charities: state.charities && state.charities.concat(action.payload.projects),
        nextId: action.payload.nextId
      };
    default:
      return state;
  }
}
