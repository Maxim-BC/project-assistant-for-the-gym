import React from "react";
import "./Favorites.css";

function Favorites({ arrayFavorites, quantityItemFavorites, deleteItem }) {
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
                убрать
              </button>
            </div>
          </li>
        );
      })
    );
  return (
    <div className="favorites">
      <h2>Ваша тренировка</h2>
      <p className="favorites-quantity-exercises">
        Количество упражнений: {quantityItemFavorites}
      </p>
      <ol className="favorites-list">{resultList}</ol>
    </div>
  );
}

export default Favorites;
