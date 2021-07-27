import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupShoulders({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 66,
      name: "Жим штанги стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 67,
      name: "Жим штанги сидя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 68,
      name: "Жим гантелей сидя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 69,
      name: "Жим гантелей стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 70,
      name: "Подъем гантелей перед собой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 71,
      name: "Тяга штанги к подбородку широким хватом ",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 72,
      name: "Тяга верхнего блока к лицу с канатом",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 73,
      name: "Разведение гантелей в стороны ",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 74,
      name: "Армейский жим",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 75,
      name: "Отведения назад в тренажере «Бабочка»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 76,
      name: "Жим гири стоя одной рукой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 77,
      name: "Тяга гантелей к подбородку",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 78,
      name: "Кубинский жим с гантелями",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 79,
      name: "Отведение руки в сторону на блоке",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 80,
      name: "«Жим Арнольда»",
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
      <Link to={`/`} className="group-muscles-btn-back">
        <p className="group-muscles-btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupShoulders;
