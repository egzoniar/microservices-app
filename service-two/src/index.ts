import app from "./api/app-routes";

import config from "./config";

app.listen(config.PORT, () => {
  console.log(`Service Two is listening to port ${config.PORT}`);
});
