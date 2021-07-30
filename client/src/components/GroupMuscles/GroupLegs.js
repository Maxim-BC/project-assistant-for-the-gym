import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";
import { Link } from "react-router-dom";

function GroupLegs({ addItem }) {
  const [arrExercisesBreast] = useState([
    {
      id: 51,
      name: "Приседания со штангой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 52,
      name: "Жим ногами в тренажёре",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 53,
      name: "Гакк-приседания",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 54,
      name: "Выпады с гантелями",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 55,
      name: "Разгибание ног в тренажёре",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 56,
      name: "Подъемы на носки стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 57,
      name: "Жим лёжа в тренажере с узкой постановкой ног",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 58,
      name: "Болгарские выпады",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 59,
      name: "Выпады с гантелями",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 60,
      name: "Выпады со штангой",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 61,
      name: "Наклон вперёд на коленях",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 62,
      name: "Приведение ног (в кроссовера или лента-эспандер)",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 63,
      name: "Сведения на тренажёре",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 64,
      name: "Отведение бедра назад",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 65,
      name: "Приседания «Зерхера»",
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
      <h1 className="group-muscles-title">Ноги</h1>
      <ul className="list-exercises-ul">{listExercises}</ul>
      <Link to={`/`} className="group-muscles-btn-back">
        <p className="group-muscles-btn-back-text">Выбрать другую группу мышц</p>
      </Link>
    </div>
  );
}

export default GroupLegs;
