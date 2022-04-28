import React from "react";

import style from "./style.module.scss";

const Header = (user: any) => {
    const topics = [
        {id: 1, title: "Viagens", link: ""},
        {id: 2, title: "Solicitações", link: ""},
        {id: 3, title: "Configurações", link: ""},
    ]
    return(
        <header className={style.header}>
            <h3>LOGO</h3>
            <ul>
                {topics.map((item) => (
                    <li>{item.title}</li>
                ))}
                <li>
                    <label>{user.user.name}</label>
                    <img src={user.user.photo} alt="" />
                </li>
            </ul>
        </header>
    )
}

export default Header;