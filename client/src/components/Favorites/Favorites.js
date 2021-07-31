import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { registerList } from "../../api";

function Favorites({
  arrayFavorites,
  quantityItemFavorites,
  deleteItem,
  deleteList,
}) {
  const [idList, setIdList] = useState("");
  const [tittle, setTittle] = useState("");
  const resultList =
    quantityItemFavorites === 0 ? (
      <p className="favorites-no-quantity-exercises">
        Вы еще не выбрали упражнения
      </p>
    ) : (
      arrayFavorites.map((item, index) => {
        return (
          <li className="favorites-point" key={index}>
            <p className="favorites-name-point">{item.name}</p>
            <div className="favorites-box-number">
              <p className="favorites-text-point">Кол-во подходов:</p>
              <p className="favorites-number-point">{item.repeat}</p>
            </div>
            <div className="favorites-box-number">
              <p className="favorites-text-point">Кол-во повторений:</p>
              <p className="favorites-number-point">{item.approaches}</p>
            </div>
            <div className="favorites-box-btn">
              <button
                className="favorites-btn-delete"
                onClick={() => deleteItem(index)}
              >
                удалить
              </button>
            </div>
          </li>
        );
      })
    );
  const deleteListAndNameList = (evt) => {
    setTittle("");
    deleteList();
    setIdList("");
  };
  const createList = () => {
    let result = arrayFavorites.map((item) => item);
    registerList(tittle, result)
      .then((resBody) => {
        setIdList(resBody.id);
        console.log(resBody);
      })
      .catch((err) => console.error(err));
  };
  const createNewList = () => {
    setIdList("");
    deleteList();
    setTittle("");
  };
  const btnAddNewWorkouts =
    idList === "" ? (
      ""
    ) : (
      <button
        onClick={createNewList}
        type="button"
        className="favorites-btn-save"
      >
        Создать новую тренировку
      </button>
    );
  const linkAndBtnSaveList =
    idList === "" ? (
      <button
        disabled={!tittle || quantityItemFavorites === 0}
        onClick={createList}
        type="button"
        className="favorites-btn-save"
      >
        Сохранить тренировку
      </button>
    ) : (
      <Link
        onClick={deleteListAndNameList}
        className="favorites-link-workouts"
        to={`/workouts/${idList}`}
      >
        Перейти к вашей тренировке
      </Link>
    );
  const changeNameList = (evt) => {
    setTittle(evt.target.value);
  };
  return (
    <div className="favorites">
      <h2>Ваша тренировка</h2>
      <p className="favorites-quantity-exercises">
        Количество упражнений: {quantityItemFavorites}
      </p>
      <label>
        <input
          disabled={quantityItemFavorites === 0}
          onChange={changeNameList}
          type="text"
          value={tittle}
          placeholder="Новая тренировка"
          className="favorites-input-name"
        />
      </label>
      <ul className="favorites-list">{resultList}</ul>
      <div className="favorites-box-link-btn-save-link">
        {linkAndBtnSaveList}
        {btnAddNewWorkouts}
      </div>
    </div>
  );
}

export default Favorites;
