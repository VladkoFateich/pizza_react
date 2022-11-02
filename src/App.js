// пропсдрилинг это когда элемент прокидывается больше чем через 1 уровень это не хорошо, для того что бы это пофиксисть используется коннтекст
import "./scss/app.scss";
import { Header } from "./components/Header";

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";

export const SearchContext = React.createContext("");

function App() {
  // изучить контекст
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}> {/*Provider это компонент  эта строчка используется что бы напрямую прокинуть в нужную компоненту searchValue и setSearchValue и принимаем их там где они нужны */}
        <Header /> {/* благодаря контексту это не нужно searchValue={searchValue} setSearchValue={setSearchValue} */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
