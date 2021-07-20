import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupLegs({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 21,
      name: "Приседания со штангой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 22,
      name: "Жим ногами в тренажёре",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 23,
      name: "Гакк-приседания",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 24,
      name: "Выпады с гантелями",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 25,
      name: "Разгибание ног в тренажёре",
      repeat: 0,
      approaches: 0,
    },
  ]);

  const listExercises = (
    <>
      {arrExercisesBreast.map((item, index) => (
        <ListExercises item={item} key={index} addItem={addItem} />
      ))}
    </>
  );

  return (
    <div className="box-exercises">
      <h1 className="group-muscles-title">Ноги</h1>
      <ul className="list-exercises-ul">{listExercises}</ul>
      <Link to={`/`} className="btn-back">
        <p className="btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupLegs;
