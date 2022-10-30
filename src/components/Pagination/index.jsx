import React from "react";
import ReactPaginate from "react-paginate";

import style from './Pagination.module.scss'

export const Pagination = ({onChangePage}) => {
    return (
<ReactPaginate className={style.root}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={4}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    )
}