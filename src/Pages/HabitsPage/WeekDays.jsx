import { useState } from "react";
import styled from "styled-components";

export default function WeekDays(props){
    const {weekday, days, setDays, isDisabled} = props;

    const [selected, setSelected] = useState(false);

    function selectedd(){
        if(!selected){
            setSelected(true);
            const novaArray = [...days, weekday.day];
            setDays(novaArray);
        }else{
            setSelected(false);
            const newArray = [];
            for (let i = 0; i < days.length; i++){
                if(days[i] !== weekday.day){
                    newArray.push(days[i]);
                }
            }
            setDays(newArray);
        }
    }

    return(
        <Botao disabled={isDisabled} onClick={selectedd} selected={selected}>{weekday.name}</Botao>
    )
}
const Botao = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    margin-bottom: 10px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    border: ${props => props.selected ? '1px solid #CFCFCF' : '1px solid #D5D5D5'};
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.selected ? '#FFFFFF' : '#DBDBDB'};
    &:disabled{
        cursor: not-allowed;
    }
`;
