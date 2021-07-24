const express = require("express");
const router = express.Router();
// const { appointmentQueries: query } = require("../queries/Query");
const db = require("../db/dbconfig");

// appointments    ${port}/api/appointments
router.get("/", async (req, res) => {
    const findAll = await db.query(`SELECT * FROM appointments`, (err, res) => {
        if (err) {
            console.log("Find all Query error!!!:", err);
        } else {
            console.log(res);
        }
    });

    // query.findAll(res, query.table);
});

// show appointments in desc order
// /appointments/apptdate
router.get("/apptdate", async (req, res) => {
    const apptDate = await db.query(
        `SELECT appointment_date FROM appointments`,
        (err, res) => {
            if (err) {
                console.log("Appointment Date Query error!!!:", err);
            } else {
                console.log(res);
            }
        }
    );

    // query.apptdate(res, query.table);
});

// appointments
router.post("/makeAppointment", async (req, res) => {
    const patient_first_name = req.body.patient_first_name;
    const patient_last_name = req.body.patient_last_name;
    const physicians_id = req.body.physicians_id;
    const appointment_date = req.body.appointment_date;
    const insurance = req.body.insurance;
    const telephone = req.body.telephone;
    const comments = req.body.comments;
    const height = req.body.height;
    const weight = req.body.weight;
    const makeAppointment = await db.query(
        `INSERT INTO appointments (patient_first_name, patient_last_name, physicians_id, appointment_date, insurance, telephone, comments, height, weight) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            patient_first_name,
            patient_last_name,
            physicians_id,
            appointment_date,
            insurance,
            telephone,
            comments,
            height,
            weight
        ],
        (err, res) => {
            if (err) {
                console.log("Make Appointment Query error!!!:", err);
            } else {
                console.log(res);
            }
        }
    );

    // query.makeAppointment(req, res);
});

module.exports = router;
