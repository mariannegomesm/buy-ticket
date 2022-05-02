import React from "react";

import Header from "../../components/Header";

import { useSelector } from "react-redux";

const Perfil = () => {
    const loginReducer = useSelector((state: any) => state.loginReducer);


    return(
        <section>
            <Header user={loginReducer}/>
        </section>
    )
}

export default Perfil;