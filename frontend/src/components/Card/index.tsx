import React from "react";

import style from "./style.module.scss";

const Card = (travel: any) => {
    return(
        <div className={style.containerCard}>
            <div className={style.package}>
                {travel.travel.flight ? (
                    <div>
                        <span className="material-icons-outlined">flight</span>
                        <span>Pacote de viagem aérea</span>
                    </div>
                ) : (
                    <div>
                        <span className="material-icons-outlined"> airport_shuttle</span>
                        <span>Pacote de viagem terrestre</span>
                    </div>
                )}
            </div>
            <div className={style.card}>
                <img src={travel.travel.photo} alt="" />
                <div>
                    <div className={style.title}>
                        <h3>{travel.travel.title}</h3>
                        <span className="material-icons-outlined">more_vert</span>
                    </div>
                    <p>{travel.travel.description}</p>
                    <div className={style.icons}>
                        <button>
                            <span className="material-icons-outlined">shopping_cart</span>
                            <span>Carrinho</span>
                        </button>
                        <div>
                            <span className="material-icons-outlined">chat</span>
                            <span className="material-icons">favorite_border</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;