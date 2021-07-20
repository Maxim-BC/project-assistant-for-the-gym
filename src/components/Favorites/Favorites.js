import React, { useState } from "react";
import "./Favorites.css";

function Favorites({ arrayFavorites, quantityItemFavorites, deleteItem }) {
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
  const createList = () => {
    let result = arrayFavorites.map((item) => item);
    console.log (result)
    // registerList(tittle, result)
    //   .then
      // (resBody) => this.setState({ idList: resBody.id }),
      // this.props.isListCreated()
      // ()
      // .catch((err) => console.log(`Ошибка: ${err}`));
  };
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
          disabled={!tittle || quantityItemFavorites === 0}
          onChange={changeNameList}
          type="text"
          value={tittle}
          placeholder="Новая тренировка"
          className="favorites__name"
        />
      </label>
      <ul className="favorites-list">{resultList}</ul>
      <button onClick={createList} type="button" className="favorites-btn-save">
        Сохранить тренировку
      </button>
    </div>
  );
}

export default Favorites;
