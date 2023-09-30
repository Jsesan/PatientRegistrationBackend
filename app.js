const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: "*" }));

app.use(express.json());

const patientRoutes = require("./routes/patient");

app.use(patientRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Patient Registration Screen" });
});

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
