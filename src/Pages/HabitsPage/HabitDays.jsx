import { useEffect, useState } from "react";
import styled from "styled-components";

export default function HabitDays(props){

    const {weekday, days, setDays, isDisabled, habito} = props;

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if(habito.days.includes(weekday.day)){
            setSelected(true);
        }
    }, []);

    console.log(selected);

    return(
        <Botao selected={selected}>{weekday.name}</Botao>
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
`