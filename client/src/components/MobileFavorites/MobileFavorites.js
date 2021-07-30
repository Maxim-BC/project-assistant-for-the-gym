import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileFavorites.css";
import { registerList } from "../../api";

function MobileFavorites({
  arrayFavorites,
  quantityItemFavorites,
  deleteItem,
  deleteList,
}) {
  const [idList, setIdList] = useState("");
  const [tittle, setTittle] = useState("");
  const [btnOpenSaveList, setBtnOpenSaveList] = useState("show");

  const openMenuSaveList = () => {
    setBtnOpenSaveList("hide");
  };
  const cancel = () => {
    setBtnOpenSaveList("show");
  };
  const resultList =
    quantityItemFavorites === 0 ? (
      <p className="mobile-favorites-no-quantity-exercises">
        Вы еще не выбрали упражнения
      </p>
    ) : (
      arrayFavorites.map((item, index) => {
        return (
          <li className="mobile-favorites-point" key={index}>
            <p className="mobile-favorites-name-point">{item.name}</p>
            <div className="mobile-favorites-box-number">
              <p className="mobile-favorites-text-point">Подходов:</p>
              <p className="mobile-favorites-number-point">{item.repeat}</p>
            </div>
            <div className="mobile-favorites-box-number">
              <p className="mobile-favorites-text-point">Повторений:</p>
              <p className="mobile-favorites-number-point">{item.approaches}</p>
            </div>
            <div className="mobile-favorites-box-btn">
              <button
                className="mobile-favorites-btn-delete"
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
    setBtnOpenSaveList("show");
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
  };
  const btnAddNewWorkouts =
    idList === "" ? (
      ""
    ) : (
      <button
        onClick={createNewList}
        type="button"
        className="mobile-favorites-btn-save"
      >
        Создать новую
      </button>
    );
  const linkAndBtnSaveList =
    idList === "" ? (
      <button
        disabled={!tittle || quantityItemFavorites === 0}
        onClick={createList}
        type="button"
        className="mobile-favorites-btn-save"
      >
        Сохранить
      </button>
    ) : (
      <Link
        onClick={deleteListAndNameList}
        className="mobile-favorites-link-workouts"
        to={`/workouts/${idList}`}
      >
        Перейти к тренировке
      </Link>
    );
  const changeNameList = (evt) => {
    setTittle(evt.target.value);
  };

  const windowMobileFavorites =
    btnOpenSaveList === "hide" ? (
      <div className="mobile-favorites">
        <h2 className="mobile-favorites-h2">Ваша тренировка</h2>
        <p className="mobile-favorites-quantity-exercises">
          Количество упражнений: {quantityItemFavorites}
        </p>
        <label>
          <input
            disabled={quantityItemFavorites === 0}
            onChange={changeNameList}
            type="text"
            value={tittle}
            placeholder="Новая тренировка"
            className="mobile-favorites-input-name"
          />
        </label>
        <ul className="mobile-favorites-list">{resultList}</ul>
        <div className="mobile-favorites-box-link-btn-save-link">
          {linkAndBtnSaveList}
          {btnAddNewWorkouts}
          <button
            onClick={() => cancel()}
            type="button"
            className="mobile-favorites-back"
          >
            Назад
          </button>
        </div>
      </div>
    ) : (
      ""
    );

  return (
    <>
      <button onClick={() => openMenuSaveList()} className={btnOpenSaveList}>
        {quantityItemFavorites}
      </button>
      {windowMobileFavorites}
    </>
  );
}

export default MobileFavorites;
