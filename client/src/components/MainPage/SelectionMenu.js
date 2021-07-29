import React from "react";
import { Link } from "react-router-dom";
import Legs from "../GroupMuscles/image/Legs.jpg";
import Biceps from "../GroupMuscles/image/Biceps.jpg";
import Shoulders from "../GroupMuscles/image/Shoulders.jpg";
import Breast from "../GroupMuscles/image/Breast.jpg";
import Back from "../GroupMuscles/image/Back.jpg";
import Triceps from "../GroupMuscles/image/Triceps.jpg";
import Abs from "../GroupMuscles/image/Abs.jpg";
import "./SelectionMenu.css";

function MainPage() {
  return (
    <div className="main-box">
      <div className="box-cards">
        <Link to={`/group-breast/`} className="card-muscle-group">
          <h2 className="title-muscle-group">Грудь</h2>
          <img src={Breast} className="muscle-group-img" alt="breast-img" />
        </Link>
        <Link to={`/group-back/`} className="card-muscle-group">
          <h2 className="title-muscle-group">Спина</h2>
          <img src={Back} className="muscle-group-img" alt="back-img" />
        </Link>
        <Link to={`/group-shoulders/`} className="card-muscle-group">
          <h2 className="title-muscle-group">Плечи</h2>
          <img
            src={Shoulders}
            className="muscle-group-img"
            alt="shoulders-img"
          />
        </Link>
        <Link to={`/group-biceps/`} className="card-muscle-group">
          <h2 className="title-muscle-group">Бицепс</h2>
          <img src={Biceps} className="muscle-group-img" alt="biceps-img" />
        </Link>
        <Link to={`/group-triceps/`} className="card-muscle-group">
          <h2 className="title-muscle-group">Трицепс</h2>
          <img src={Triceps} className="muscle-group-img" alt="triceps-img" />
        </Link>
        <Link to={`/group-abs/`} className="card-muscle-group">
          <h2 className="title-muscle-group">Пресс</h2>
          <img src={Abs} className="muscle-group-img" alt="abs-img" />
        </Link>
        <Link to={`/group-legs/`} className="card-muscle-group">
          <h2 className="title-muscle-group">Ноги</h2>
          <img src={Legs} className="muscle-group-img" alt="legs-img" />
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
