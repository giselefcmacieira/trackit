import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { useContext } from "react";
import { infProfile, percent } from "../../constants/Context";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Topo, Text, ContainerProgressBar, PageContainer } from "./Styles";

export default function HistoricPage(){
    const navigate = useNavigate();

    const infProfi = useContext(infProfile);

    const progresso = useContext(percent);

    function goToHabits(){
        navigate('/habitos');
    }

    function goToHistoric(){
        navigate('/historico');
    }

    return(
        <PageContainer>
            <Topo>
            <div data-test="header">
                <p>TrackIt</p>
                <img data-test="avatar" src={infProfi[0].image}></img>
            </div>
            </Topo>

            <ContainerHistorico>
                <p>Histórico</p>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ContainerHistorico>

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
    );
}

const ContainerHistorico = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 17px;
    p:first-child{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    p:nth-child(2){
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;