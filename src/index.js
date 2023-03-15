const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const { PORT, MONGO_URL } = process.env;

const SERVER_PORT = PORT || 5000;

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)
  .then(() =>
    app.listen(SERVER_PORT, () =>
      console.log(`listening on port ${SERVER_PORT}`)
    )
  )
  .catch((e) => console.error(e.message));
