import React from "react";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Content } from "../components/Content";
import { Pagination } from "../components/Pagination";
// import { SearchContext } from "../App";

export const Home = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  // const { searchValue } = React.useContext(SearchContext);
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
      <Content
        categoryId={categoryId}
        sortType={sortType}
        // searchValue={searchValue}
        currentPage={currentPage}
      />
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div> // this для передачи от ребенка к родителю
  );
};
//
