import React from "react";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Content } from "../components/Content";

export const Home = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0)

    return (
        <div className="container">
        <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={(id)=> setCategoryId(id)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Content/>
      </div>
    )
}