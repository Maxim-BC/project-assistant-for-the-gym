import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
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
import IconInstagram from "./components/icon_img/Icon_instagram.png";
import IconTelegram from "./components/icon_img/icon_telegram.png";
import MobileFavorites from "./components/MobileFavorites/MobileFavorites";
import "./App.css";

function App() {
  const [arrayFavorites, setArrayFavorites] = useState([]);
  const [quantityItemFavorites, setQuantityItemFavorites] = useState(0);
  const [curVersion, setCurVersion] = useState("");
  useEffect(() => {
    const { innerWidth } = window;
    if (innerWidth < 769) {
      setCurVersion("mobile");
    } else setCurVersion("desktop");
  }, []);
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
            <Switch>
              <Route exact path="/">
                <SelectionMenu />
              </Route>
              <Route path="/group-biceps/">
                <GroupBiceps addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route path="/group-legs/">
                <GroupLegs addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route path="/group-shoulders/">
                <GroupShoulders addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route path="/group-breast/">
                <GroupBreast addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route path="/group-triceps/">
                <GroupTriceps addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route path="/group-abs/">
                <GroupAbs addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route path="/group-back/">
                <GroupBack addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route path={`/workouts/:id`}>
                <Workouts addItem={addItem} deleteItem={deleteItem} />
              </Route>
              <Route>
                <h1>Страница не найдена</h1>
              </Route>
            </Switch>
          </section>
          <aside className="favorites-box">
            {curVersion === "desktop" && (
              <Favorites
                deleteItem={deleteItem}
                arrayFavorites={arrayFavorites}
                quantityItemFavorites={quantityItemFavorites}
                deleteList={deleteList}
              />
            )}
            {curVersion === "mobile" && (
              <MobileFavorites
                deleteItem={deleteItem}
                arrayFavorites={arrayFavorites}
                quantityItemFavorites={quantityItemFavorites}
                deleteList={deleteList}
              />
            )}
          </aside>
        </main>
        <footer className="footer-box">
          <div className="footer-contact-box">
            <h2 className="contacts-h2">Контакты:</h2>

            <a
              className="footer-link-instagram"
              href="https://www.instagram.com/maxim_lang_1990/"
            >
              <img
                src={IconInstagram}
                className="footer-icon-contacts"
                alt="icon_instagram"
              />
              Instagram
            </a>
            <a className="footer-link-instagram" href="https://t.me/maxim_lang">
              <img
                src={IconTelegram}
                className="footer-icon-contacts"
                alt="icon_telegram"
              />
              Telegram
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
