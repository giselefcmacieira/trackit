import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { useContext, useEffect, useState } from "react";
import { infProfile } from "../../constants/Context";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Topo, Text, ContainerProgressBar, PageContainer } from "./Styles";
import dayjs from "dayjs";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Habit from "./Habit";
import { percent } from "../../constants/Context";


export default function TodayPage(){

    const [progresso, setProgresso] = useContext(percent);

    const navigate = useNavigate();

    const infProfi = useContext(infProfile);

    const [todayHabits, setTodayHabits] = useState([]);

    const [quantidade, setQuantidade] = useState(0);

    let mensagem = '';

    const [recarregar, setRecarregar] = useState(0);

    const data = Date();

    const array = data.split(' ');

    let weekday = '';

    if(array[0] === 'Mon'){
        weekday = 'Segunda';
    }else if(array[0] === 'Tue'){
        weekday = 'Terça';
    }else if(array[0] === 'Wed'){
        weekday = 'Quarta';
    }else if(array[0] === 'Thu'){
        weekday = 'Quinta';
    }else if(array[0] === 'Fri'){
        weekday = 'Sexta';
    }else if(array[0] === 'Sat'){
        weekday = 'Sabado';
    }else if(array[0] === 'Sun'){
        weekday = 'Domingo';
    }

    useEffect(() => {
        const url = `${BASE_URL}/habits/today`;
        const config = {headers: {'Authorization': `Bearer ${infProfi[0].token}`}};
        const requisicao = axios.get(url, config);
        requisicao.then(resp => {
            console.log(resp.data);
            setTodayHabits(resp.data);
            setQuantidade(resp.data.length);
        })
        requisicao.catch(erro => {
            console.log(erro.response.data);
        })
    },[recarregar]);

    const concluidos = todayHabits.filter(obj => {
        if(obj.done){
            return true;
        }
    })

    const qtdConcluidos = concluidos.length;

    setProgresso((qtdConcluidos/quantidade)*100);

    if(progresso === 0){
        mensagem = 'Nenhum hábito concluído ainda';
    }else{
        mensagem = `${progresso}% dos hábitos concluídos`;
    }

    function goToHabits(){
        navigate('/habitos');
    }

    function goToHistoric(){
        navigate('/historico');
    }

    return(
        <PageContainer>
            <Topo>
                <p>TrackIt</p>
                <img src={infProfi[0].image}></img>
            </Topo>

            <ContainerInfoHoje progresso={progresso}>
                <p>{weekday}, {dayjs().format('DD/MM')}</p>
                <p>{mensagem}</p>
            </ContainerInfoHoje>
            
            {todayHabits.map(habit => (
                <Habit habit={habit} key={habit.id} recarregar={recarregar} setRecarregar={setRecarregar}/>)
            )}

            <Menu>
                <Text onClick={goToHabits}>
                    <p>Habitos</p>
                </Text>

                <Link to='/hoje'>
                <ContainerProgressBar>
                    <CircularProgressbarWithChildren value={progresso}
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

                <Text onClick={goToHistoric}>
                    <p>Histórico</p>
                </Text>

            </Menu>
        </PageContainer>
    )
}

const ContainerInfoHoje = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    padding: 10px;
    margin-top: 20px;
    p:first-child{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 5px:
    }
    p:nth-child(2){
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${props => {
            if(props.progresso > 0){
                return '#8FC549';
            }else{
                return '#BABABA'
            }
        }};
    }
`;

