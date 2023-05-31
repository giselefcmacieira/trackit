import styled from "styled-components";
import { LoginPageContainer, FormContainer } from "./styles";
import Logo from '../../assets/Logo_PNG.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from  'react-loader-spinner';

export default function RegisterPage(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const [name, setName] = useState('');

    const [image, setImage] = useState('');

    const [password, setPassword] = useState('');

    const [buttonClicked, setButtonClicked] = useState(false);

    const [isDisabled, setIsDisabled] = useState(false);

    function register(event){
        event.preventDefault();
        const url = `${BASE_URL}/auth/sign-up`
        const object= {
            email,
            name,
            image,
            password
        }
        setButtonClicked(true);
        setIsDisabled(true);
        const requisicao = axios.post(url,object);
        requisicao.then(resp => {
            console.log(resp);
            navigate('/')
        });
        requisicao.catch(erro => {
            console.log(erro.response.data.message);
            alert(erro.response.data.message);
            setButtonClicked(false);
            setIsDisabled(false);
        });
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
                onChange={e => setEmail(e.target.value)}
                disabled={isDisabled}>
                </input>
                <input required
                type='password' 
                placeholder="senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={isDisabled}>
                </input>
                <input required
                type='text' 
                placeholder="nome"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={isDisabled}>
                </input>
                <input required
                type='url' 
                placeholder="foto"
                valeu={image}
                onChange={e => setImage(e.target.value)}
                disabled={isDisabled}>
                </input>
                <button type='submit' disabled={isDisabled}>
                {buttonClicked ? <ThreeDots 
                        height="70" 
                        width="70" 
                        radius="9"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}/> 
                    :
                    "Cadastrar"}
                </button>
            </FormContainer>
            <Link to='/'>
            <a>Já tem uma conta? Faça login</a>
            </Link>
        </LoginPageContainer>
    );
}
