import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { useContext, useState } from "react";
import { infProfile } from "../../constants/Context";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Topo, Text, ContainerProgressBar, PageContainer } from "./Styles";

export default function HabitPage(){

    const navigate = useNavigate();

    const infProfi = useContext(infProfile);

    const [addHabit, setAddHabit] = useState(false);

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

    return(
        <PageContainer>
            <Topo>
                <p>TrackIt</p>
                <img src={infProfi[0].image}></img>
            </Topo>

            <ContainerMyHabits>
                <p>Meus hábitos</p>
                <div onClick={adicionarHabito}>+</div>
            </ContainerMyHabits>


            {addHabit ? 
            <ContainerAddHabit>
                <FormContainer>
                    <input required
                    type='text' 
                    placeholder="nome do hábito">
                    </input>
                </FormContainer>
                <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </div> 
                <div>
                    <button onClick={cancelarAdd}>Cancelar</button>
                    <button>Salvar</button>
                </div>
            </ContainerAddHabit>
            :
            ''}

            <Menu>

                    <Text onClick={goToHabits}>
                        <p>Habitos</p>
                    </Text>

                <Link to='/hoje'>
                <ContainerProgressBar>
                    <CircularProgressbarWithChildren value={10}
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
        margin-top: 20px;
        button:first-child{
            width: 84px;
            height: 35px;
            border: none;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
        }
        button:nth-child(2){
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
        }
    }
    button{
        width: 30px;
        height: 30px;
        margin-right: 4px;
        margin-bottom: 10px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
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
