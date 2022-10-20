import React from "react";
import { PizzaBlock } from "./PizzaBlock";
import pizzas from "../assets/pizza.json";

export const Content = () => {
  return (
    <div className="content__items">
      {pizzas.map((value) => (
        <PizzaBlock
          image={value.imageUrl}
          title={value.title}
          price={value.price}
          types={value.types}
          sizes={value.sizes}
        />
      ))}
{/* что бы не писать такой длинный код можно сделать {...value}, но элеметы должны сообыветсвовать клчам из обьекта, т.е. не image={value.imageUrl} а imageUrl={value.imageUrl} */}
      {/* что бы передать price числом, то price = {500} */}
      {/* <PizzaBlock title="Салями" price="300" />
      <PizzaBlock title="Пеперони" price="400" />
      <PizzaBlock title="Пеперони*2" price="600" />
      <PizzaBlock title="Деревенская" price="350" />
      <PizzaBlock title="Студенческая" price="250" />
      <PizzaBlock title="Три тройки" price="333" />
      <PizzaBlock title="Три четверки" price="444" />
      <PizzaBlock title="Три пятерки" price="555" />
      <PizzaBlock title="Diablo" price="666" /> */}
    </div>
  );
};

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
