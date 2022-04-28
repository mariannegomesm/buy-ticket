import React from "react";

import style from "./style.module.scss";

const Card = () => {
    return(
        <>
            <label>Pacote de viagem 1</label>
            <div className={style.card}>
                <img src="" alt="" />
                <div>
                    <div>
                        <h3>Título</h3>
                        <span>...</span>
                    </div>
                    <p>Descrição</p>
                    <button>Carrinho</button>
                </div>
            </div>
        </>
    )
}

export default Card;