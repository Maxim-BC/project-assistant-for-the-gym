import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupAbs({ addItem }) {
  const [arrExercisesBreast, setArrExercisesBreast] = useState([
    {
      id: 1,
      name: "Скручивания",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 2,
      name: "Косые скручивания ладонь-стопа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 3,
      name: "Подъём ног на перекладине",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 4,
      name: "Подъём торса",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 5,
      name: "Упражнения с роликом",
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
      <h1 className="group-muscles-title">Пресс</h1>
      <ul className="ul-list-exercises">{listExercises}</ul>
      <Link to={`/`} className="btn-back">
        <p className="btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupAbs;
