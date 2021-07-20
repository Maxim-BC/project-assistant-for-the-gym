import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupBreast({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 16,
      name: "Жим лёжа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 17,
      name: "Армейский жим",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 18,
      name: "Отжимания на брусьях",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 19,
      name: "Пуловеры прямыми руками",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 20,
      name: "Кроссоверы стоя",
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
      <h1 className="group-muscles-title">Грудь</h1>
      <ul className="list-exercises-ul">{listExercises}</ul>
      <Link to={`/`} className="btn-back">
        <p className="btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupBreast;
