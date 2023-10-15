import React, { useReducer, FormEventHandler } from "react";
import countries from "../../helpers/countriesSelectOptions.json";
import styles from "./CharitySearch.module.scss";
import { customStyles } from "./customStyles";
import Select from "react-select";
import { ValueType } from "react-select/src/types";
import { SelectedCountry } from "../../types/types";
import { nextCharitiesMapper } from "./utils/nextCharitiesMapper";
import Charities from "../Charities/Charities";
import { fetchNextCharities } from "./utils/fetchNextCharities";
import { reducer } from "./reducer/charitySearchReducer";
import Button from "../Button/Button";

interface Props {
  setIsActive: (arg0: boolean) => void;
  setIsLoading: (arg0: boolean) => void;
}

function CharitySearch({ setIsActive, setIsLoading }: Props) {
  const [state, dispatch] = useReducer(reducer, {
    selectedCountry: { value: "", label: "" },
    nextId: 1,
    charities: null
  });

  const { selectedCountry, nextId, charities } = state;

  const getData = (id: number) => {
    setIsLoading(true);
    return fetchNextCharities(id, selectedCountry).then(res => {
      console.log(nextCharitiesMapper(res));
      dispatch({ type: "FETCH_NEW_DATA_SUCCESS", payload: nextCharitiesMapper(res) });
      setIsLoading(false);
    });
  };

  const handleSubmit:FormEventHandler = e => {
    e.preventDefault();
    dispatch({ type: "FETCH_NEW_DATA_START" });
    setIsLoading(true);
    return getData(1)
      .then(() => {
        console.log("Success");
        setIsActive(true);
        setIsLoading(false);
      })
      .catch(e => console.warn(e));
  };

  const handleCountryChange = (selectedOption: ValueType<SelectedCountry>) => {
    const selectedCountry = selectedOption as SelectedCountry;
    dispatch({ type: "CHANGE_SELECTED_COUNTRY", payload: selectedCountry });
  };

  const ButtonLabel = () => (
    <>
      Search for charities{" "}
      <span role="img" aria-label="Heart icon">
        ❤️
      </span>
    </>
  );

  return (
    <section className={styles.formContainer}>
      <div>
        <h1 className={styles.title}>Search for charity</h1>
      </div>
      <p className={styles.subtitle}>
        Filter charities by personal search conditions. Use form below to see charities matching yours criteria.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formInnerContainer}>
          <label className={styles.formLabel} htmlFor="name">
            Select country
          </label>
          <Select styles={customStyles} options={countries} onChange={handleCountryChange} isClearable={true} />
        </div>
        <Button type="submit" label={<ButtonLabel />} />
      </form>
      {charities && <Charities charities={charities} getData={getData} nextId={nextId} setIsLoading={setIsLoading} />}
    </section>
  );
}

export default CharitySearch;
