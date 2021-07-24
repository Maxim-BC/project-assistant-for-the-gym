import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Favorites/Favorites.css";
import { getList } from "../../api";

function Workouts() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [exercises, setExercises] = useState([]);
  useEffect(
    () =>
      getList(params.id).then((data) => {
        setExercises(data);
        setTitle(data[0].title);
        console.log(data);
      }),
    [params.id]
  );
  const arrayExercises = exercises.map((data, index) => {
    return (
      <li className="list-exercises-li" key={index}>
        <h3>{data.name_exercise}</h3>
        <p className="list-exercises-label-text">
          Кол-во подходов: {data.approaches_exercise}
        </p>
        <p className="list-exercises-label-text">
          Кол-во подходов: {data.repeat_exercise}
        </p>
      </li>
    );
  });
  return (
    <div>
      <div className="favorites">
        <h2 className="title-workouts">{title}</h2>
        {arrayExercises}
        <Link to={`/`} className="btn-back">
          <button className="btn-back-text">вернуться на главную</button>
        </Link>
      </div>
    </div>
  );
}
export default Workouts;
