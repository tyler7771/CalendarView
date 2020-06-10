import React, { useEffect } from "react";

import { getCalendarEvents } from "../utils/googleApiFunctions";

const Calendar = () => {
  useEffect(() => {
    getCalendarEvents();
  });

  return (
    <>
      <h1>Calendar!</h1>
    </>
  );
};

export default Calendar;
