import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";

const Home = () => {
    const loginReducer = useSelector((state: any) => state.loginReducer);
    
    return(
        <section>
            <Header user={loginReducer}/>
        </section>
    )
}

export default Home;