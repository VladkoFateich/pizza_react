import React from "react";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Content } from "../components/Content";

export const Home = ({searchValue}) => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort sortType={sortType} onClickSortType={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Content categoryId={categoryId} sortType={sortType} searchValue = {searchValue}/>
    </div>
  );
};
