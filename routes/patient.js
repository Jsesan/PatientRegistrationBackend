const express = require("express");

const router = express.Router();

const patientsController = require("../controllers/patient");

router.post("/patient", patientsController.createPatient);

router.get("/patient", patientsController.getAllPatients);

module.exports = router;
