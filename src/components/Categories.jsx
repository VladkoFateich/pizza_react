import React from "react";

export const Categories = ({categoryId, onClickCategory}) => {
  // const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  // const onClickIndex = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? "active" : ""}
          >{categoryName}</li>
        ))}
{/* при помощи map все эл массива перебираются и помещаются в categoryName index хранит индекс массива*/}
      </ul>
    </div>
  );
};
// className={activeIndex === 0 ? 'active': ''} если activeIndex = 0 то в className возвращается 'active', в остальных случаях пустое знаечение
// onClick={()=>onClickAktive()} ананимная функция которая вызывает функцию on onClickAktive
        {/* <li
          onClick={() => onClickIndex(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onClickIndex(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onClickIndex(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onClickIndex(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onClickIndex(5)}
          className={activeIndex === 5 ? "active" : ""}
        >
          Закрытые
        </li> */}