import React, { useState } from "react";
import ListExercises from "../ListExercises/ListExercises";
import "./GroupMuscles.css";

function GroupBack({ addItem }) {
  const [arrExercisesBreast, setArrExercisesBreast] = useState([
    {
      id: 6,
      name: "Становая тяга",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 7,
      name: "Тяга Т-образного грифа",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 8,
      name: "Гиперэкстензия",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 9,
      name: "Тяга штанги к поясу",
      repeat: 0,
      approaches: 0,
    },
    {
      id: 10,
      name: "Подтягивания",
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
      <h1 className="group-muscles-title">Спина</h1>
      <ul className="ul-list-exercises">{listExercises}</ul>
    </div>
  );
}

export default GroupBack;
