import React from "react";

import style from "./style.module.scss";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import * as action from "../../redux/constants";

const Header = (user: any) => {
    const history = useHistory();
    const dispatch: AppDispatch = useDispatch();

    const topics = [
        {id: 1, title: "Viagens", link: ""},
        {id: 2, title: "Configurações", link: ""},
    ]

    const LogOut = () => {
        dispatch({type: action.USER_LOGOUT});
        history.push("/login");
    }

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
                <li><span className="material-icons sigout" onClick={() => LogOut()}>exit_to_app</span></li>
            </ul>
        </header>
    )
}

export default Header;