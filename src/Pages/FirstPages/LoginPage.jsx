import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo_PNG.png"
import { BASE_URL } from "../../constants/urls";
import { LoginPageContainer, FormContainer, Body } from "../../styles/Styles-Login-Register";
import { ThreeDots } from  'react-loader-spinner'
import { infProfile } from "../../constants/Context";

export default function LoginPage(props){

    const {fezLogin, setFezLogin} = props;

    const [infProf, setInfProf] = useContext(infProfile);

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
            console.log(resp.data);
            setInfProf(resp.data);
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
        <Body>
        <LoginPageContainer>
            <img src={Logo} />
            <p>TrackIt</p>
            <FormContainer onSubmit={login}>
                <input required
                data-test="email-input"
                type='email' 
                placeholder="email"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                disabled={isDisabled}>
                </input>
                <input required
                data-test="password-input"
                type='password' 
                placeholder="senha"
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                disabled={isDisabled}>
                </input>
                <button data-test="login-btn" type='submit' disabled={isDisabled}>
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
            <Link data-test="signup-link" to='/cadastro'>
            Não tem uma conta? Cadastre-se
            </Link>
        </LoginPageContainer>
        </Body>
    );
}

