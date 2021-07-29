const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");

const mysqlConnectionConfig = process.env.JAWSDB_URL ?? {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Teragolf1645",
  database: "assistant_for_gym",
};

const connection = mysql.createConnection(mysqlConnectionConfig);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

connection.connect((err) => {
  if (!err) {
    console.log("Successfully connected to MySQL Database");
  } else {
    console.log(err.code);
  }
});

app.get("/workouts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  connection.query(
    `select workout.title, name_exercise, approaches_exercise, repeat_exercise 
    from workout 
    join exercises 
    on workout.id = exercises.id_workout
    where workout.id = ${id}`,
    (err, data) => {
      if (err) return res.sendStatus(500);
      res.json(data);
    }
  );
});

app.post("/workouts/create", (req, res) => {
  const myQueryWorkout = `INSERT INTO workout
  (title)
VALUES
  ("${req.body.title}");`;
  connection.query(myQueryWorkout, (err, data) => {
    if (err) return res.status(500);
    const idWorkout = data.insertId;
    let exercises = req.body.exercises;
    exercises = exercises.map(function (item) {
      return [idWorkout, item.id, item.name, item.repeat, item.approaches];
    });
    const myQueryExercises = `INSERT INTO exercises
  (id_workout, id_exercises, name_exercise, repeat_exercise, approaches_exercise)
VALUES
  ?`;
    connection.query(myQueryExercises, [exercises], (err) => {
      if (err) return res.sendStatus(500);
      res.json({ id: idWorkout });
    });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
