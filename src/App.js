import React from "react";
import MyApp from "./MyApp";
import MyCustomElement from "./MyCustomElement";
import { HashRouter } from "react-router-dom";
import {
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
} from "@ui5/webcomponents-react";

function App() {
  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
    >
      <HashRouter>
        <MyApp />
      </HashRouter>
    </FlexBox>
  );
}

export default App;
