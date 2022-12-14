import React from "react";
import ReactPaginate from "react-paginate";

import style from './Pagination.module.scss'

export const Pagination = ({currentPage, onChangePage}) => {
    return (
<ReactPaginate className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={4}
        forcePage= {currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    )
}