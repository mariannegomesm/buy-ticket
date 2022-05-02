import React, {useEffect, useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import style from "./style.module.scss";

import Card from "../../components/Card";
import Header from "../../components/Header";
import HomeServices from "./services";

const Home = () => {
    const history = useHistory();
    const [allTravels, setAllTravels] = useState([])

    const GetAllTravels = async () => {
        const listTravels = await HomeServices.GetAllTravels();
        setAllTravels(listTravels.data);
    }

    useEffect(() => {
        GetAllTravels();
    }, [])

    const loginReducer = useSelector((state: any) => state.loginReducer);

    useEffect(() => {
        if(!loginReducer.name){
            history.push("/error");
        }
    }, [])
    
    return(
        <section className={style.sectionHome}>
            <Header user={loginReducer}/>
            <main>
                <h3>Últimos pacotes: </h3>
                <div>
                    {allTravels.map((travel) => (
                        <Card travel={travel}/>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default Home;