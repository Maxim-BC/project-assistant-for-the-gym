import React, { useState } from "react";
import "./GroupMuscles.css";

function GroupBreast({ addItem }) {
  const [arrExercisesBreast, setArrExercisesBreast] = useState([
    {
      id: 1,
      name: "Жим лёжа",
    },
    {
      id: 2,
      name: "Армейский жим",
    },
    {
      id: 3,
      name: "Отжимания на брусьях",
    },
    {
      id: 4,
      name: "Пуловеры прямыми руками",
    },
    {
      id: 5,
      name: "Кроссоверы стоя",
    },
  ]);
  const [numberApproaches, setNumberApproaches] = useState("");
  const [numberRepeat, setNumberRepeat] = useState("");
  const changeNumberApproaches = (e) => {
    setNumberApproaches(e);
  };
  const changeNumberRepeat = (e) => {
    setNumberRepeat(e);
  };
  const listExercises = (
    <>
      {arrExercisesBreast.map((item, index) => (
        <li className="li-name-exercises" key={index}>
          {item.name}
          {/* <label>
            <input
              onChange={changeNumberApproaches}
              type="number"
              placeholder="Количество подходов"
              required
            />
          </label>
          <label>
            <input
              onChange={changeNumberRepeat}
              type="number"
              placeholder="Количество повторений"
              required
            />
          </label> */}
          <button
            type="button"
            // disabled={!numberRepeat || !numberApproaches}
            onClick={() => addItem(item)}
            className="add-button"
          >
            добавить
          </button>
        </li>
      ))}
    </>
  );

  return (
    <div className="box-exercises">
      <h1 className="group-muscles-title">Грудь</h1>
      <ul className="ul-list-exercises">{listExercises}</ul>
    </div>
  );
}

export default GroupBreast;
