import React from "react";

import { useHistory } from "react-router-dom";

import style from "./style.module.scss";
import LottieFile from "../../components/LottieFile";

const Error = () => {
    const history = useHistory();

    const ReturnPage = (route: string) => {
        history.push(route);
    }

    return(
        <section className={style.sectionError}>
            <LottieFile name="pageNotFound" width={500}/>
            <h1>Página não encontrada</h1>
            <p>Por favor, retorne e faça seu login novamente</p>
            <button onClick={() => ReturnPage("/login")}>Entrar</button>
        </section>
    )
}

export default Error;