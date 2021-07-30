import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupTriceps({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 81,
      name: "Жим штанги узким хватом",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 82,
      name: "Французский жим со штангой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 83,
      name: "Разгибание рук в Кроссовере с канатами",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 84,
      name: "Разгибание рук с гантелями лёжа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 85,
      name: "Подъём гантели двумя руками из-за головы",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 86,
      name: "Отжимания в упоре сзади",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 87,
      name: "Разгибание рук на верхнем блоке стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 88,
      name: "Разгибание одной руки на верхнем блоке стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 89,
      name: "Разгибание руки с гантелью поперек туловища лёжа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 90,
      name: "Разгибание одной руки на верхнем блоке обратным хватом",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 91,
      name: "Разгибание рук в грузоблочном тренажере",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 92,
      name: "Обратные отжимания на скамье",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 93,
      name: "Разгибание рук на блоке обратным хватом",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 94,
      name: "Разгибания на блоке из-за головы c канатом",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 95,
      name: "Французский жим EZ штанги на наклонной скамье",
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
      <div className="box-list-exercises-ul"><ul className="list-exercises-ul">{listExercises}</ul></div>
      <Link to={`/`} className="group-muscles-btn-back">
        <p className="group-muscles-btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupTriceps;
