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

import "./App.css";

function App() {
  const [arrayFavorites, setFavorites] = useState([]);
  const [quantityItemFavorites, setQuantityItemFavorites] = useState(0);
  const addItem = (item, numberApproaches, numberRepeat) => {
    item.repeat = numberRepeat;
    item.approaches = numberApproaches;
    const array = arrayFavorites;
    if (quantityItemFavorites < 20) {
      const newArray = [...array, item];
      setFavorites(newArray);
      setQuantityItemFavorites(quantityItemFavorites + 1);
      console.log(item);
    } else return;
  };
  const deleteItem = (index) => {
    const array = arrayFavorites;
    array.splice(index, 1);
    setFavorites(array);
    setQuantityItemFavorites(quantityItemFavorites - 1);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Assistant for the gym</h1>
          {/* <img src={headerLogo} className="header-img" alt="logo" /> */}
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
          </section>
          <aside className="favorites-box">
            <Favorites
              deleteItem={deleteItem}
              arrayFavorites={arrayFavorites}
              quantityItemFavorites={quantityItemFavorites}
            />
          </aside>
        </main>
        <footer className="footer-box">
          <h3 className="contacts-h3">Контакты</h3>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
