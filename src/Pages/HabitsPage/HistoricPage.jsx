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
                <p>TrackIt</p>
                <img src={infProfi[0].image}></img>
            </Topo>
            <Menu>

                    <Text onClick={goToHabits}>
                        <p>Habitos</p>
                    </Text>

                <Link to='/hoje'>
                <ContainerProgressBar>
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

                <Text onClick={goToHistoric}>
                    <p>Histórico</p>
                </Text>

            </Menu>
        </PageContainer>
    );
}