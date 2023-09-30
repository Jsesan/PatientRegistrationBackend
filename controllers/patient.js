const Patient = require("../models/patient");

exports.getAllPatients = (req, res) => {
  Patient.fetchAll()
    .then(([data, schema]) => res.status(200).send(data))
    .catch((err) => console.log({ err }));
};

exports.createPatient = (req, res) => {
  const data = req.body;
  const patient = new Patient(
    null,
    data.name,
    data.address,
    data.phone,
    data.email,
    data.image
  );
  patient
    .save()
    .then(() => res.status(200).send({ message: "Patient saved successfully" }))
    .catch((e) => console.log(e));
};
