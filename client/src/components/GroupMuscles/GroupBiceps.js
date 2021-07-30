import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupBiceps({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 26,
      name: "Подъём штанги на бицепс стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 27,
      name: "Подъём гантелей «молот»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 28,
      name: "Подъём штанги/гантелей в скамье «Скотта»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 29,
      name: "Подъёмы на бицепс в наклоне",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 30,
      name: "Подъёмы на блоке и в тренажёрах",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 31,
      name: "Подъёмы гантелей на наклонной скамье",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 32,
      name: "Подъёмы гантелей с супинацией",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 33,
      name: "Подъёмы гантелей с эспандером",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 34,
      name: "Сгибания на бицепс в кроссовере",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 35,
      name: "Подтягивания обратным хватом",
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
      <h1 className="group-muscles-title">Бицепс</h1>
      <div className="box-list-exercises-ul"><ul className="list-exercises-ul">{listExercises}</ul></div>
      <Link to={`/`} className="group-muscles-btn-back">
        <p className="group-muscles-btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupBiceps;
