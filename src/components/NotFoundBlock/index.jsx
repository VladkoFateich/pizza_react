import React from "react";
import style from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return(
        <div className={style.root}> 
            <span>😕</span>
            <h1>Ничего не найдено</h1>
            <p>К сожалению данная страница отсутствует в нашем интернет магазине</p>
        </div>
    )
}