import React, { useState } from "react";
import "../GroupMuscles/GroupMuscles.css";

function ListExercises({ item, index, addItem }) {
  const [numberApproaches, setNumberApproaches] = useState();
  const [numberRepeat, setNumberRepeat] = useState();

  const changeNumberApproaches = (e) => {
    if (199 > e.target.value > 0 && e.target.value !== "-") {
      setNumberApproaches(e.target.value);
    } else return;
  };
  const changeNumberRepeat = (e) => {
    if (1999 > e.target.value > 0 && e.target.value !== "-") {
      setNumberRepeat(e.target.value);
    } else return;
  };
  return (
    <li className="li-name-exercises" key={index}>
      {item.name}
      <label>
        <input
          value={numberApproaches}
          max="100"
          min="1"
          onChange={changeNumberApproaches}
          type="number"
          placeholder="Кол-во подходов"
          required
        />
      </label>
      <label>
        <input
          value={numberRepeat}
          max="1000"
          min="1"
          onChange={changeNumberRepeat}
          type="number"
          placeholder="Кол-во повторений"
          required
        />
      </label>
      <button
        type="button"
        disabled={!numberRepeat || !numberApproaches}
        onClick={() => addItem(item, numberRepeat, numberApproaches)}
        className="add-button"
      >
        добавить
      </button>
    </li>
  );
}

export default ListExercises;
