const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

const db = require("./util/database");

db.execute("SELECT * FROM patients")
  .then((res) => {
    console.log({ res });
  })
  .catch((error) => {
    console.log({ error });
  });

app.get("/", (req, res) => {
  res.json({ message: "Patient Registration" });
});

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
