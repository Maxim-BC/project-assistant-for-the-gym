import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Workouts.css";
import { getList } from "../../api";

function Workouts() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [exercises, setExercises] = useState([]);
  const [errorGetList, setErrorGetList] = useState("");
  useEffect(
    () =>
      getList(params.id).then((data) => {
        if (data[0] === undefined) {
          setErrorGetList("Неправильная ссылка или ID тренировки");
          console.error("Incorrect link or request ID");
        } else {
          setExercises(data);
          setTitle(data[0].title);
          setErrorGetList("");
        }
      }),
    [params.id]
  );
  const arrayExercises =
    errorGetList !== "" ? (
      <h1>{errorGetList}</h1>
    ) : (
      exercises.map((data, index) => {
        return (
          <li className="workouts-list-exercises-li" key={index}>
            №{index + 1}
            <h3 className="workouts-name-exercise">{data.name_exercise}</h3>
            <p className="workouts-list-exercises-label-text">
              Кол-во подходов: {data.approaches_exercise}
            </p>
            <p className="workouts-list-exercises-label-text">
              Кол-во подходов: {data.repeat_exercise}
            </p>
          </li>
        );
      })
    );
  return (
    <div className="box-exercises">
      <div className="workouts-box">
        <h2 className="title-workouts">Тренировка:"{title}"</h2>
        <div className="workouts-box-list-exercises-ul">
          <ul className="workouts-ul-list">{arrayExercises}</ul>
        </div>
        <div className="workouts-box-btn-back">
          <Link to={`/`} className="workouts-btn-back">
            <button className="workouts-btn-back-text">
              Вернуться на главную
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Workouts;
