import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Logo_PNG.png"
import { BASE_URL } from "./constants/urls";
import { LoginPageContainer, FormContainer } from "./styles";

export default function LoginPage(){

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    function login(event){
        event.preventDefault();
        const url = `${BASE_URL}/auth/login`;
        const object = {
            email,
	        password
        };
        const requisicao = axios.post(url, object);
        requisicao.then(resp => console.log(resp))
        requisicao.catch(erro => console.log(erro.response));
    }

    return(
        <LoginPageContainer>
            <img src={Logo} />
            <p>TrackIt</p>
            <FormContainer onSubmit={login}>
                <input required
                type='email' 
                placeholder="email"
                value = {email}
                onChange = {e => setEmail(e.target.value)}>
                </input>
                <input 
                type='password' 
                placeholder="senha"
                value = {password}
                onChange = {e => setPassword(e.target.value)}>
                </input>
                <button type='submit'>Entrar</button>
            </FormContainer>
            <Link to='/cadastro'>
            <a>Não tem uma conta? Cadastre-se</a>
            </Link>
        </LoginPageContainer>
    );
}

