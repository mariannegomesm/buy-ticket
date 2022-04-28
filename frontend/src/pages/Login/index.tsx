import React, {MouseEvent, useEffect, useState} from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store"

import LoginServices from "./services";
import style from "./style.module.scss";
import * as Action from "../../redux/constants";

interface User {
    name?: string,
    email: string,
    password: string,
    photo?: string
}

const Login = () => {
    const history = useHistory();
    const dispatch: AppDispatch = useDispatch();
    const loginReducer = useSelector((state: any) => state.loginReducer);

    const [user, setUser] = useState({} as User);
    const [allUsers, setAllUsers] = useState<User[]>();
    const [active, setActive] = useState<boolean>(false);

    const GetAllUsers = async () => {
        const {data: listUsers} = await LoginServices.GetAllUsers();
        setAllUsers(listUsers);
    }

    const Redirect = (route: string) => {
        history.push(route)
    }

    const Login = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        
        const userFiltered = allUsers?.filter((element) => element.email == user.email && element.password == user.password);
        if(userFiltered){
            dispatch({type: Action.USER_LOGGED, payload: userFiltered[0]});
            Redirect("/");
        };
    }
    
    const RegisterUser = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        
        await LoginServices.CreateUser(user);
        alert("Usuário criado com sucesso!");
        setActive(false)
    }

    function AddImage(){
        var selectedImage = document.getElementById('input')?.files[0];
        var elementImage : any = document.getElementById('image');
      
        var reader = new FileReader();
        reader.onload = function(){
            elementImage.src = this.result
            setUser({...user, photo: elementImage.src})
        }
        
        reader.readAsDataURL(selectedImage);
    }
    
    useEffect(() => {
        GetAllUsers();
    }, [])

    return(
        <section className={style.sectionLogin}>
                {!active && (
                    <form>
                        <h1>Entrar</h1>
                        <label>* Email:</label>
                        <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
                        <label>* Senha: </label>
                        <input type="password"  onChange={(e) => setUser({...user, password: e.target.value})}/>
                        <button onClick={() => setActive(true)}>Me cadastrar</button>
                        <button onClick={(e) => Login(e)}>Entrar</button>
                    </form>
                )}
                {active && (
                    <form>
                        <h1>Cadastrar</h1>
                        <label>* Nome:</label>
                        <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>

                        <label>* Email:</label>
                        <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>

                        <label>* Senha: </label>
                        <input type="password"  onChange={(e) => setUser({...user, password: e.target.value})}/>
                        
                        <label>* Foto de perfil: </label>
                        <input type="file" accept="image/*" onChange={() => AddImage()} id="input"/>
                        <img id="image" src="file_you_choose" />
                        
                        <button onClick={() => setActive(false)}>Já tenho cadastro</button>
                        <button onClick={(e) => RegisterUser(e)}>Entrar</button>
                    </form>
                )}
        </section>
    )
}

export default Login;