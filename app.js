const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Patient Registration" });
});

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
