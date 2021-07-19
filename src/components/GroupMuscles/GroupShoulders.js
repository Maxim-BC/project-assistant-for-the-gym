import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupShoulders({ addItem }) {
  const [arrExercisesBreast, setArrExercisesBreast] = useState([
    {
      id: 26,
      name: "Жим гантелей сидя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 27,
      name: "Тяга штанги к подбородку",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 28,
      name: "Жим Арнольда",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 29,
      name: "Отведения назад в тренажёре Баттерфляй",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 30,
      name: "Жим со штангой из-за головы",
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
      <h1 className="group-muscles-title">Плечи</h1>
      <ul className="list-exercises-ul">{listExercises}</ul>
      <Link to={`/`} className="btn-back">
        <p className="btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupShoulders;
