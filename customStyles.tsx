import { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  container: (styles, { data }) => {
    return {
      ...styles,
    };
  },

  control: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      borderRadius: "2px",
      marginTop: "20px"
    };
  },

  menu: styles => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      zIndex: 2
    };
  },

  option: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      ":hover": {
        color: "black",
        backgroundColor: "white"
      }
    };
  },

  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      border: "1px solid white"
    };
  },

  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),

  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white"
    }
  }),

  singleValue: (styles, { data }) => ({
    ...styles,
    color: "white",
    ":hover": {
      color: "white"
    }
  }),

  placeholder: (styles, { data }) => ({
    ...styles,
    color: "white",
    ":hover": {
      color: "white"
    }
  }),
  input: (styles, { data }) => ({
    ...styles,
    color: "white",
    ":hover": {
      color: "white"
    }
  })
};
