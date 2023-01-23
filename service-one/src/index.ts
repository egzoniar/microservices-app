import app from "./api/app-routes";

import config from "./config";

// app.use("/app-event", (req, res) => {
//   const { payload } = req.body;
//   const { event, data } = payload;

//   switch (event) {
//     case "UPDATE_COUNTER_TWO":
//       db.cnt_two = data;
//       break;
//     case "UPDATE_COUNTER_THREE":
//       db.cnt_three = data;
//       break;
//     default:
//       console.log(`Unknown event: ${event} with data: ${JSON.stringify(data)}`);
//   }

//   res.json(db);
// });

app.listen(config.PORT, () => {
  console.log(`Service One is listening to port ${config.PORT}`);
});
