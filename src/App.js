// пропсдрилинг это когда элемент прокидывается больше чем через 1 уровень это не хорошо 
import "./scss/app.scss";
import { Header } from "./components/Header";

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";

function App() {
  // изучить контекст
  const [searchValue, setSearchValue] = React.useState('')
  return (
    <div className="wrapper">
      <Header searchValue = {searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue = {searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
