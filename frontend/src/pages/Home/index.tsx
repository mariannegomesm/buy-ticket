import React from "react";

import { useDispatch, useSelector } from "react-redux";

import style from "./style.module.scss";

import Card from "../../components/Card";
import Header from "../../components/Header";

const Home = () => {
    const loginReducer = useSelector((state: any) => state.loginReducer);
    
    return(
        <section className={style.sectionHome}>
            <Header user={loginReducer}/>
            <main>
                <Card />
            </main>
        </section>
    )
}

export default Home;