const express = require("express");
const mongoose = require("mongoose");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const tasks = require("./routes/tasks");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(errorHandler);
app.use(notFound);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log("Listening on PORT", PORT);
    })
  )
  .catch((err) => console.log(err));
