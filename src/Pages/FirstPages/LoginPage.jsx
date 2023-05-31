import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo_PNG.png"
import { BASE_URL } from "../../constants/urls";
import { LoginPageContainer, FormContainer } from "./styles";
import { ThreeDots } from  'react-loader-spinner'

export default function LoginPage(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [buttonClicked, setButtonClicked] = useState(false);

    const [isDisabled, setIsDisabled] = useState(false);

    function login(event){
        event.preventDefault();
        const url = `${BASE_URL}/auth/login`;
        const object = {
            email,
	        password
        };
        setButtonClicked(true);
        setIsDisabled(true);
        const requisicao = axios.post(url, object);
        requisicao.then(resp => {
            console.log(resp);
            navigate('/hoje');
        })
        requisicao.catch(erro => {
            console.log(erro.response.data.message);
            alert(erro.response.data.message)
            setButtonClicked(false);
            setIsDisabled(false);
        });
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
                onChange = {e => setEmail(e.target.value)}
                disabled={isDisabled}>
                </input>
                <input 
                type='password' 
                placeholder="senha"
                value = {password}
                onChange = {e => setPassword(e.target.value)}
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
                    "Entrar"}
                </button>
            </FormContainer>
            <Link to='/cadastro'>
            <a>Não tem uma conta? Cadastre-se</a>
            </Link>
        </LoginPageContainer>
    );
}

