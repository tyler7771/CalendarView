import Calendar from "./calendar";
import React from "react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCalendarAlt);

const App = () => {
  return (
    <>
      <Calendar />
    </>
  );
};

export default App;
