import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupAbs({ addItem }) {
  const [arrExercisesBreast] = useState([
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
    {
      id: 6,
      name: "Скручивания с поднятыми ногами",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 7,
      name: "«Велосипед»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 8,
      name: "«Планка»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 9,
      name: "«Вакуум»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 10,
      name: "Подъем ног лежа на боку",
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
      <div className="box-list-exercises-ul"><ul className="list-exercises-ul">{listExercises}</ul></div>
      <Link to={`/`} className="group-muscles-btn-back">
        <p className="group-muscles-btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupAbs;
