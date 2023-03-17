const express = require("express");
const mongoose = require("mongoose");
const tasks = require("./routes/tasks");
require("dotenv").config();

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  console.log(error.properties);
  res.status(status).json({ message });
});

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
