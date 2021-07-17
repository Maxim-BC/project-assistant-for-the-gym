import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";


function GroupBiceps({ addItem }) {
  const [arrExercisesBreast, setArrExercisesBreast] = useState([
    {
      id: 11,
      name: "Подъём штанги на бицепс стоя",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 12,
      name: "Подъём гантелей «молот»",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 13,
      name: "Подъём штанги/гантелей в скамье Скотта",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 14,
      name: "Подъёмы на бицепс в наклоне",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 15,
      name: "Подъёмы на блоке и в тренажёрах",
      repeat: 0,
      approaches: 0,
    },
  ]);

  const listExercises = (
    <>
      {arrExercisesBreast.map((item, index) => (
        <ListExercises item={item} index={index} addItem={addItem} />
      ))}
    </>
  );

  return (
    <div className="box-exercises">
      <h1 className="group-muscles-title">Бицепс</h1>
      <ul className="ul-list-exercises">{listExercises}</ul>
    </div>
  );
}

export default GroupBiceps;