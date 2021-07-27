import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SelectionMenu from "./components/MainPage/SelectionMenu";
import GroupBiceps from "./components/GroupMuscles/GroupBiceps";
import GroupLegs from "./components/GroupMuscles/GroupLegs";
import GroupBreast from "./components/GroupMuscles/GroupBreast";
import GroupBack from "./components/GroupMuscles/GroupBack";
import GroupAbs from "./components/GroupMuscles/GroupAbs";
import GroupShoulders from "./components/GroupMuscles/GroupShoulders";
import GroupTriceps from "./components/GroupMuscles/GroupTriceps";
import Favorites from "./components/Favorites/Favorites";
import Workouts from "./components/Workouts/Workouts";
import Icon_instagram from "./components/icon_img/Icon_instagram.png";
import "./App.css";

function App() {
  const [arrayFavorites, setArrayFavorites] = useState([]);
  const [quantityItemFavorites, setQuantityItemFavorites] = useState(0);
  const addItem = (item, numberApproaches, numberRepeat) => {
    item.repeat = numberRepeat;
    item.approaches = numberApproaches;
    const array = arrayFavorites;
    if (quantityItemFavorites < 20) {
      const newArray = [...array, item];
      setArrayFavorites(newArray);
      setQuantityItemFavorites(quantityItemFavorites + 1);
      console.log(item);
    } else return;
  };
  const deleteItem = (index) => {
    const array = arrayFavorites;
    array.splice(index, 1);
    setArrayFavorites(array);
    setQuantityItemFavorites(quantityItemFavorites - 1);
  };
  const deleteList = () => {
    setArrayFavorites([]);
    setQuantityItemFavorites(0);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Assistant for the gym</h1>
        </header>
        <main className="main-page">
          <section className="window-section">
            <Route exact path="/">
              <SelectionMenu />
            </Route>
            <Route path="/group_biceps/">
              <GroupBiceps addItem={addItem} deleteItem={deleteItem} />
            </Route>
            <Route path="/group_legs/">
              <GroupLegs addItem={addItem} deleteItem={deleteItem} />
            </Route>
            <Route path="/group_shoulders/">
              <GroupShoulders addItem={addItem} deleteItem={deleteItem} />
            </Route>
            <Route path="/group_breast/">
              <GroupBreast addItem={addItem} deleteItem={deleteItem} />
            </Route>
            <Route path="/group_triceps/">
              <GroupTriceps addItem={addItem} deleteItem={deleteItem} />
            </Route>
            <Route path="/group_abs/">
              <GroupAbs addItem={addItem} deleteItem={deleteItem} />
            </Route>
            <Route path="/group_back/">
              <GroupBack addItem={addItem} deleteItem={deleteItem} />
            </Route>
            <Route path={`/workouts/:id`}>
              <Workouts addItem={addItem} deleteItem={deleteItem} />
            </Route>
          </section>
          <aside className="favorites-box">
            <Favorites
              deleteItem={deleteItem}
              arrayFavorites={arrayFavorites}
              quantityItemFavorites={quantityItemFavorites}
              deleteList={deleteList}
            />
          </aside>
        </main>
        <footer className="footer-box">
          <div className="footer-contact-box">
            <h2 className="contacts-h2">Контакты:</h2>
            Instagram:
            <a
              className="footer-link-instagram"
              href="https://www.instagram.com/maxim_lang_1990/"
            >
              <img
                src={Icon_instagram}
                className="footer-icon-instagram"
                alt="icon_instagram"
              />{" "}
              https://www.instagram.com/maxim_lang_1990/
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
