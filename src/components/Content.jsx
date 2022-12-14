import React from "react";
import axios from "axios";

// import pizzas from "../assets/pizza.json"; теперь данные берутся с mockAPI
import { PizzaBlock } from "./PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { SearchContext } from "../App";

export const Content = ({ categoryId, sortType, currentPage}) => {
  // Узучить что такое fetch
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    setIsLoading(true); //  загружает скелетон каждый раз при сортировке
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "desc" : "asc"; // что бы не писать все это в order

    // fetch(
    //   `https://63539295e64783fa8275178b.mockapi.io/items?page=${currentPage}&limit=3&
    //   ${
    //   Загрузка данных с mockAPI
    //     categoryId > 0 ? `category=${categoryId}` : "" // добавляет в ссылку категории
    //   }&sortBy=${sortBy}&order=${order}`
    // ) // добавляет в ссылку сортировку, replace('-', '') -удаляет минус из строки ссылки
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false); // говорит что загрузка скелетонов завершилась и рендерит пиццы
    //   }); // сырой способ arr-массив

    axios
      .get(
        `https://63539295e64783fa8275178b.mockapi.io/items?page=${currentPage}&limit=3&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setItems(res.data); //если вывести в консоль ты выведет дата, поэтому res.data
        setIsLoading(false);
      });

    window.scroll(0, 0); // при возвращении на страницу перекидывает наверх
  }, [categoryId, sortType, currentPage]); // отлавливает отрисовку и не перерисовывает много раз благодаря [] изучить, есть видос на канале про хуки
  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : items
            .filter((obj) => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
              }
              return false;
            })
            .map((value) => <PizzaBlock key={value.id} {...value} />)}
      {/* isLoading создает пустой массив мапит его заменяет undefuned на скелетон иначе рендери вторую часть */}
      {/* что бы не писать такой длинный код можно сделать {...value}, но элеметы должны сообыветсвовать клчам из обьекта, т.е. не image={value.imageUrl} а imageUrl={value.imageUrl} */}
      {/* что бы передать price числом, то price = {500} */}
    </div>
  );
};

// если поиск осуществляется без backend то испольуем между item. ... .map -.filter((obj) => {
//   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
//     return true;
//   }
//   return false;
// }) если через backend (на мокапи плохо работает если срезу сортировка и поиск) то делаем на примере сортировки const search = searchValue ? `search=${searchValue}` : ''; и добавляем в fetch ${search}
// page=1&limit=3& пагинация первая всегда страница 1 и показывать по 3 пиццы что бы оставить поганицию и отремонтировать страницу надо в гридах сделать 3 столбца а не 4

{
  /* <div className="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div>{" "}
<div class="pizza-block">
  <img
    class="pizza-block__image"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
    alt="Pizza"
  />
  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
  <div class="pizza-block__selector">
    <ul>
      <li class="active">тонкое</li>
      <li>традиционное</li>
    </ul>
    <ul>
      <li class="active">26 см.</li>
      <li>30 см.</li>
      <li>40 см.</li>
    </ul>
  </div>
  <div class="pizza-block__bottom">
    <div class="pizza-block__price">от 395 ₽</div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> */
}
