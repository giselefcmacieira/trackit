import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import Check from "../../assets/Check.png"
import { BASE_URL } from "../../constants/urls"
import { infProfile } from "../../constants/Context";

export default function Habit(props){
    const {habit, recarregar, setRecarregar} = props

    const infProfi = useContext(infProfile);


    function marcarDesmarcarHabito(){
        if(!habit.done){
            const url = `${BASE_URL}/habits/${habit.id}/check`;
            const config = {headers: {'Authorization': `Bearer ${infProfi[0].token}`}};
            const requisicao = axios.post(url,'',config);
            requisicao.then(resp => {
                console.log(resp);
                setRecarregar(recarregar + 1);
            });
            requisicao.catch(erro => {
                console.log(erro.response.data);
            })
        }else{
            const url = `${BASE_URL}/habits/${habit.id}/uncheck`;
            const config = {headers: {'Authorization': `Bearer ${infProfi[0].token}`}};
            const requisicao = axios.post(url,'',config);
            requisicao.then(resp => {
                console.log(resp);
                setRecarregar(recarregar - 1);
            });
            requisicao.catch(erro => {
                console.log(erro.response.data);
            })
        }
    }

    return(
        <ContainerHabit data-test="today-habit-container" done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}>
            <div>
                <p data-test="today-habit-name">{habit.name}</p>
                <p data-test="today-habit-sequence">Sequência atual: <p>{habit.currentSequence} dias</p></p>
                <p data-test="today-habit-record">Seu record: <p>{habit.highestSequence} dias</p></p>
            </div>
            <div data-test="today-habit-check-btn">
                <img onClick = {marcarDesmarcarHabito} src={Check}></img>
            </div>
        </ContainerHabit>
    )
}

const ContainerHabit = styled.div`
    width: calc(100vw - 45px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px;
    margin-bottom: 10px;
    div:first-child{
        width: 70%
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-right: 5px;
        p:first-child{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            color: #666666;
            margin-bottom: 7px;
        }
        p:nth-child(2){
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: #666666;
            p{
                color: ${props => props.done ? '#8FC549' : '#666666'};
                display: inline;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 16px;
            }
        }
        p:nth-child(3){
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: #666666;
            p{
                color: ${props => {
                    if(props.done && props.currentSequence > 0 && props.highestSequence === props.currentSequence){
                        return '#8FC549'
                    }else{
                        return '#666666'
                    }
                }};
                display: inline;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 16px;
            }
        }
    }
    div:nth-child(2){
        width: 69px;
        height: 69px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.done ? '#8FC549' : '#EBEBEB'};
        border: ${props => props.done ? 'none' : '1px solid #E7E7E7'};
        border-radius: 5px;
        img{
            width: 35px;
            height: 28px;
        }
    }
`
