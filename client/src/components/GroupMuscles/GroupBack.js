import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupBack({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 11,
      name: "Становая тяга",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 12,
      name: "Тяга Т-образного грифа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 13,
      name: "Гиперэкстензия",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 14,
      name: "Тяга штанги к поясу",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 15,
      name: "Подтягивания",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 16,
      name: "Обратные разведения на блоках",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 17,
      name: "Упражнение Летящий супермен",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 18,
      name: "Тяга вертикального блока ",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 19,
      name: "Тяга горизонтального блока ",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 20,
      name: "Шраги с гантелями",
      repeat: 0,
      approaches: 0,
    },{
      id: 21,
      name: "Шраги со штангой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 22,
      name: "Шраги со штангой за спиной",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 23,
      name: "Становая Тяга «Сумо»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 24,
      name: "Румынская становая тяга",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 25,
      name: "Наклоны со штангой на плечах",
      repeat: 0,
      approaches: 0,
    },  ]);

  const listExercises = (
    <>
      {arrExercisesBreast.map((item, index) => (
        <ListExercises item={item} key={index} addItem={addItem} />
      ))}
    </>
  );

  return (
    <div className="box-exercises">
      <h1 className="group-muscles-title">Спина</h1>
      <div className="box-list-exercises-ul"><ul className="list-exercises-ul">{listExercises}</ul></div>
      <Link to={`/`} className="group-muscles-btn-back">
        <p className="group-muscles-btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupBack;
