import React from "react";
import { useSelector, useDispatch } from "react-redux"

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { Content } from "../components/Content";
import { Pagination } from "../components/Pagination";
// import { SearchContext } from "../App";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

export const Home = () => {
  // const [categoryId, setCategoryId] = React.useState(0); делаю через редакс
  const dispatch = useDispatch()
  const {categoryId, currentPage} = useSelector((state) => state.filterSlice.categoryId)
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  const onCurrentPage = number => {
    dispatch(setCurrentPage(number)
      )
  }
  const sortType = useSelector((state) =>state.filterSlice.sort.sortProperty)
  // const [sortType, setSortType] = React.useState({
  //   name: "популярности",
  //   sortProperty: "rating",
  // });
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const { searchValue } = React.useContext(SearchContext);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={onClickCategory}
        />
        <Sort /> {/* sortType={sortType} onClickSortType={(id) => setSortType(id)} */}
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Content
        categoryId={categoryId}
        sortType={sortType}
        // searchValue={searchValue}
        currentPage={currentPage}
      />
      <Pagination currentPage={currentPage} onChangePage={onCurrentPage} />
    </div> // this для передачи от ребенка к родителю
  );
};
//
