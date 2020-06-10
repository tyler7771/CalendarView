// export function getEvents(callback) {
//   request.get(url).end((err, resp) => {
//     if (!err) {
//       const events = [];
//       JSON.parse(resp.text).items.map((event) => {
//         events.push({
//           start: event.start.date || event.start.dateTime,
//           end: event.end.date || event.end.dateTime,
//           title: event.summary,
//         });
//       });
//       callback(events);
//     }
//   });
// }
import $ from "jquery";
import API_SECRETS from "./apiGoogleconfig";

export const getCalendarEvents = (cb) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${API_SECRETS.CALENDAR_ID}/events?key=${API_SECRETS.API_KEY}`,
    data: {
      timeMin: new Date().toISOString(),
    },
    success: (data) => {
      debugger;
    },
    error: (error) => {
      debugger;
    },
  });
};
