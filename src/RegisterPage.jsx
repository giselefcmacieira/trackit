import styled from "styled-components";
import { LoginPageContainer, FormContainer } from "./styles";
import Logo from './assets/Logo_PNG.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/urls";

export default function RegisterPage(){

    const [email, setEmail] = useState('');

    const [name, setName] = useState('');

    const [image, setImage] = useState('');

    const [password, setPassword] = useState('');

    function register(event){
        event.preventDefault();
        const url = `${BASE_URL}/auth/sign-up`
        const object= {
            email,
            name,
            image,
            password
        }
        const requisicao = axios.post(url,object);
        requisicao.then(resp => console.log(resp));
        requisicao.catch(erro => console.log(erro.response));
    }

    return(
        <LoginPageContainer>
            <img src={Logo} />
            <p>TrackIt</p>
            <FormContainer onSubmit={register}>
                <input required
                type='email' 
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}>
                </input>
                <input required
                type='password' 
                placeholder="senha"
                value={password}
                onChange={e => setPassword(e.target.value)}>
                </input>
                <input required
                type='text' 
                placeholder="nome"
                value={name}
                onChange={e => setName(e.target.value)}>
                </input>
                <input required
                type='url' 
                placeholder="foto"
                valeu={image}
                onChange={e => setImage(e.target.value)}>
                </input>
                <button type='submit'>Cadastrar</button>
            </FormContainer>
            <Link to='/'>
            <a>Já tem uma conta? Faça login</a>
            </Link>
        </LoginPageContainer>
    );
}
