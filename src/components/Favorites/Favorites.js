import React from "react";
import "./Favorites.css";

function Favorites({ arrayFavorites, quantityItemFavorites, deleteItem }) {
  const resultList =
    quantityItemFavorites === 0 ? (
      <p>Вы еще не выбрали упражнения</p>
    ) : (
      arrayFavorites.map((item, index) => {
        return (
          <li className="favorites-point" key={index}>
            <p className="favorites-name-point">{item.name}</p>
            <button className="favorites-btn-delete" onClick={() => deleteItem(index)}>
              убрать
            </button>
          </li>
        );
      })
    );
  return (
    <div className="favorites">
      <h2>Ваша тренировка</h2>
      <p> Количество упражнений: {quantityItemFavorites}</p>
      <ol className="favorites-list">{resultList}</ol>
    </div>
  );
}

export default Favorites;
