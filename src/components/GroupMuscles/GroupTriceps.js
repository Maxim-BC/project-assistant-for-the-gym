import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupTriceps({ addItem }) {
  const [arrExercisesBreast, setArrExercisesBreast] = useState([
    {
      id: 31,
      name: "Жим штанги узким хватом",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 32,
      name: "Французский жим со штангой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 33,
      name: "Разгибание рук в Кроссовере с канатами",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 34,
      name: "Разгибание рук с гантелями лёжа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 35,
      name: "Подъём гантели двумя руками из-за головы",
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
      <h1 className="group-muscles-title">Трицепс</h1>
      <ul className="ul-list-exercises">{listExercises}</ul>
      <Link to={`/`} className="btn-back">
        <p className="btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupTriceps;
