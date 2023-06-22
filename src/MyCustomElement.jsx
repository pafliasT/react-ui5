import React from "react";
import { createUseStyles } from "react-jss";
import { ThemingParameters } from "@ui5/webcomponents-react-base";

const styles = {
  container: {
    backgroundColor: ThemingParameters.sapBackgroundColor,
    fontFamily: ThemingParameters.sapFontFamily,
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const useStyles = createUseStyles(styles);

const MyCustomElement = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span
        style={{
          color: ThemingParameters.sapNegativeColor,
          fontSize: ThemingParameters.sapFontHeader1Size,
        }}
      >
        My custom Text Element
      </span>
    </div>
  );
};

export default MyCustomElement;
