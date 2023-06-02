import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { useContext, useEffect, useState } from "react";
import { infProfile, percent } from "../../constants/Context";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Topo, Text, ContainerProgressBar, PageContainer } from "./Styles";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { WEEKDAYS } from "../../constants/const";
import WeekDays from "./WeekDays";
import { ThreeDots } from  'react-loader-spinner';
import HabitDays from "./HabitDays";
import Trash from "../../assets/Group.png";
import Header from "./Header";

export default function HabitPage(){

    const navigate = useNavigate();

    const infProfi = useContext(infProfile);

    const progresso = useContext(percent);

    console.log(progresso);

    const [habitos, setHabitos] = useState([]);

    const [addHabit, setAddHabit] = useState(false);

    const [mensagem, setMensagem] = useState('');

    const [name, setName] = useState('');
    
    const [days, setDays] = useState([]);

    const [selected, setSelected] = useState([false, false, false, false, false, false, false]);

    const [isDisabled, setIsDisabled] = useState(false);

    const [delet, setDelet] = useState(false);

    function goToHabits(){
        navigate('/habitos');
    }

    function goToHistoric(){
        navigate('/historico');
    }

    function adicionarHabito(){
        setAddHabit(true);
    }

    function cancelarAdd(){
        setAddHabit(false);
    }

    function submit(){
        console.log(name);
        console.log(days);
        setIsDisabled(true);
        const body = {name, days};
        const config = {headers: {'Authorization': `Bearer ${infProfi[0].token}`}};
        const requisicao = axios.post(`${BASE_URL}/habits`, body, config);
        requisicao.then(resp =>{
            console.log(resp);
            setAddHabit(false);
            setIsDisabled(false);
            setName('');
            setDays([]);
            setSelected([false, false, false, false, false, false, false]);
        });
        requisicao.catch(erro =>{
            console.log(erro.response);
            alert(erro.response.data.message);
            setIsDisabled(false);
            setIsDisabled(false);
        });

    }

    function deletarHabito(id){
        const confirmacao = confirm('Deseja excluir este habito?');
        if(confirmacao){
            const config = {headers: {'Authorization': `Bearer ${infProfi[0].token}`}};
            const url = `${BASE_URL}/habits/${id}`
            const requisicao = axios.delete(url, config);
            requisicao.then(resp => {
                console.log(resp);
                if(!delet){
                    setDelet(true);
                }else{
                    setDelet(false);
                }
            });
            requisicao.catch(erro => {
                console.log(erro.response);
            })
        }
    }

    useEffect(() =>{
        const config = {headers: {'Authorization': `Bearer ${infProfi[0].token}`}};
        const requisicao = axios.get(`${BASE_URL}/habits`, config);
        //setMensagem('Carregando...')
        requisicao.then(resp =>{
            console.log(resp.data);
            setHabitos(resp.data);
            if(resp.data.length === 0){
                setMensagem('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!');
            }else{
                setMensagem('');
            }
        });
        requisicao.catch(erro => {
            console.log(erro);
        });
    },[addHabit, delet]);

    console.log(habitos);

    return(
        <body>
        <PageContainer>
            
            <Header />

            <ContainerMyHabits>
                <p>Meus hábitos</p>
                <div data-test="habit-create-btn" onClick={adicionarHabito}>+</div>
            </ContainerMyHabits>


            {addHabit ? 
            <ContainerAddHabit data-test="habit-create-container">
                <FormContainer>
                    <input required
                    data-test="habit-name-input"
                    disabled={isDisabled}
                    type='text' 
                    placeholder="nome do hábito"
                    value={name}
                    onChange={e => setName(e.target.value)}>
                    </input>
                </FormContainer>
                <div>
                    {WEEKDAYS.map(weekday => (
                        <WeekDays key = {weekday.day} 
                        weekday={weekday} 
                        days={days} setDays={setDays} 
                        isDisabled={isDisabled}
                        selected={selected} setSelected={setSelected}/>
                    ))}
                </div> 
                <div>
                    <button data-test="habit-create-cancel-btn" isDisabled={isDisabled} onClick={cancelarAdd}>Cancelar</button>
                    <button data-test="habit-create-save-btn" isDisabled={isDisabled} onClick={submit}>
                    {isDisabled ? <ThreeDots 
                        height="30" 
                        width="30" 
                        radius="6"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}/> 
                    :
                    "Salvar"}
                    </button>
                </div>
            </ContainerAddHabit>
            :
            ''}

            {habitos.map(habito => (
                <ContainerHabits data-test="habit-container">
                    <p data-test="habit-name" >{habito.name}</p>
                    <div>
                    {WEEKDAYS.map(weekday => (
                        <HabitDays key = {weekday.id} 
                        weekday={weekday} 
                        days={days} setDays={setDays} 
                        isDisabled={isDisabled}
                        habito={habito}/>
                    ))}
                    </div>
                    <img data-test="habit-delete-btn" src={Trash} onClick={() => deletarHabito(habito.id)}></img>
                </ContainerHabits>
            ))}

            <ContainerMensagem>{mensagem}</ContainerMensagem>

            <Menu data-test="menu">

                    <Text data-test="habit-link" onClick={goToHabits}>
                        <p>Habitos</p>
                    </Text>

                <Link data-test="today-link" to='/hoje'>
                <ContainerProgressBar >
                    <CircularProgressbarWithChildren value={progresso[0]}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        pathColor: "#fff",
                        trailColor: "transparent",
                        strokeLinecap: "round",
                        backgroundColor: "#52B6FF",
                      })}
                    >
                        <p>Hoje</p>
                    </CircularProgressbarWithChildren>
                </ContainerProgressBar>
                </Link>

                <Text data-test="history-link" onClick={goToHistoric}>
                    <p>Histórico</p>
                </Text>

            </Menu>
        </PageContainer>
        </body>
    );
}

const ContainerHabits = styled.div`
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 15px;
    width: 92%;
    padding: 13px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    }
    img{
        position: absolute;
        top: 11px;
        right: 10px;
        width: 13px;
    }
`

const ContainerMyHabits = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    width: 100%;
    padding: 0 18px 0 18px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    div{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`;

const ContainerAddHabit = styled.div`
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    width: 92%;
    padding: 0 18px 0 18px;
    background-color: white;
    border-radius: 5px;
    padding-top: 18px;
    div:nth-child(2){
        width: 97%;
        display:flex;
        justify-content: flex-start;
    }
    div:nth-child(3){
        width: 98%;
        display:flex;
        justify-content: flex-end;
        margin-top: 15px;
        margin-bottom: 15px;
        button:first-child{
            width: 84px;
            height: 35px;
            border: none;
            background-color: transparent;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
            margin-right: 23px;
        }
        button:nth-child(2){
            display: flex;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 35px;
            border: none;
            background: #52B6FF;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            &:disabled{
                opacity: 0.7;
            }
        }
    }
`;

const FormContainer = styled.form`
    width: 100%; 
    display: flex;
    justify-content: center;
    font-size: 20px;
    input {
        width: 92%;
        &:disabled{
            background-color: #F2F2F2;
        }
    }
`;

const ContainerMensagem = styled.div`
    box-sizing: border-box;
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 18px;
    margin-top: 10px;
`
