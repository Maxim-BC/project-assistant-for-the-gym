import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupBreast({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 36,
      name: "Жим штанги лёжа горизонтально",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 37,
      name: "Армейский жим",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 38,
      name: "Отжимания на брусьях",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 39,
      name: "Пуловеры прямыми руками",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 40,
      name: "Кроссоверы стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 41,
      name: "Сведение рук на нижнем блоке кроссовера",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 42,
      name: "Жим штанги сидя перед собой в тренажёре «Смита»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 43,
      name: "Сведение рук в тренажёре «Бабочка»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 44,
      name: "Жим сидя в трёнажере «Хаммер»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 45,
      name: "Отжимания с переносом веса тела на одну руку",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 46,
      name: "Жим «Свенда» лежа с блином",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 47,
      name: "Жим штанги головой вниз",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 48,
      name: "Жим «Свенда» с гантелью лежа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 49,
      name: "Отжимания от пола",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 50,
      name: "Полукруг гантелями",
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
      <h4 className="group-muscles-title">Грудь</h4>
      <ul className="list-exercises-ul">{listExercises}</ul>
      <Link to={`/`} className="group-muscles-btn-back">
        <p className="group-muscles-btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupBreast;
