import React, {MouseEvent, useEffect, useState} from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store"

import LoginServices from "./services";
import style from "./style.module.scss";
import * as Action from "../../redux/constants";
import LottieFile from "../../components/LottieFile";

interface User {
    name?: string,
    email: string,
    password: string,
    photo?: string,
    isAdmin: string,
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
        if(userFiltered[0].name){
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
            elementImage.src = this.result;
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
                    <div className={style.containerLogin}>
                        <form>
                            <h1><span className={`material-icons-outlined ` + style.iconLabel}>login</span> Entrar</h1>
                            <label><span className={`material-icons-outlined ` + style.iconLabel}>email</span> Email:</label>
                            <input type="email" onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Insira seu email"/>
                            <label><span className={`material-icons-outlined ` + style.iconLabel}>lock</span> Senha: </label>
                            <input type="password"  onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Insira sua senha"/>
                            <button className={style.buttonCad} onClick={() => setActive(true)}>Me cadastrar</button>
                            <button onClick={(e) => Login(e)}>Entrar</button>
                        </form>
                        <div className={style.sectionLottie}>
                            <LottieFile name="travel" width={350}/>
                        </div>
                    </div>
                )}
                {active && (
                    <div className={style.containerRegister}>
                        <div className={style.containerIllustration}>
                            {/* <LottieFile name="travel" width={350}/> */}
                        </div>
                        <form>
                            <h1><span className="material-icons-outlined">add_circle_outline</span>Cadastrar</h1>
                            <label><span className={`material-icons-outlined ` + style.iconLabel}>person_outline</span> Nome:</label>
                            <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>

                            <label><span className={`material-icons-outlined ` + style.iconLabel}>email</span> Email:</label>
                            <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>

                            <label><span className={`material-icons-outlined ` + style.iconLabel}>lock</span> Senha: </label>
                            <input type="password"  onChange={(e) => setUser({...user, password: e.target.value})}/>
                            
                            <div className={style.containerAddInfo}>
                                <div>
                                    <label><span className={`material-icons-outlined ` + style.iconLabel}>photo_camera</span> Foto de perfil: </label>
                                    <input type="file" accept="image/*" onChange={() => AddImage()} id="input" className={style.uploadImage}/>
                                    <img id="image" src="file_you_choose" />
                                </div>
                                <div>
                                    <label><span className={`material-icons-outlined ` + style.iconLabel}>admin_panel_settings</span> Administrador:</label>
                                    <select onChange={(e) => setUser({...user, isAdmin: e.target.value})}>
                                        <option value="true">Sim</option>
                                        <option value="false">Não</option>
                                    </select>
                                </div>
                            </div>
                            <button className={style.buttonCad} onClick={() => setActive(false)}>Já tenho cadastro</button>
                            <button onClick={(e) => RegisterUser(e)}>Registrar</button>
                        </form>
                    </div>
                )}
        </section>
    )
}

export default Login;