import { useContext, useEffect, useState } from "react";
import { infProfile } from "../../constants/Context";
import { PageContainer, ContainerInfoHoje } from "../../styles/Styles-Today-Habit-Historic";
import dayjs from "dayjs";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Habit from "../../components/Habit";
import { percent } from "../../constants/Context";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TodayHab } from "../../constants/Context";


export default function TodayPage(props){

    const {fezLogin, setFezLogin} = props;

    const [progresso, setProgresso] = useContext(percent);

    const [infProfi, setInfProfi] = useContext(infProfile);

    const [todayHabits, setTodayHabits] = useContext(TodayHab);

    const [quantidade, setQuantidade] = useState(0);

    //const [mensagem, setMensagem] = useState('');

    let mensagem = ''

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
        const config = {headers: {'Authorization': `Bearer ${infProfi.token}`}};
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

    useEffect(() => {
        const concluidos = todayHabits.filter(obj => {
            if(obj.done){
                return true;
            }
        })
    
        const qtdConcluidos = concluidos.length;

        const porcentagem = Math.round((qtdConcluidos/quantidade)*100)

        console.log(qtdConcluidos, quantidade, porcentagem, progresso);
    
        if(quantidade === 0){
            setProgresso(0)
        }else{ 
            setProgresso(porcentagem);
        }
    },[todayHabits])

    const concluidos = todayHabits.filter(obj => {
        if(obj.done){
            return true;
        }
    })

    if(concluidos.length === 0){
        mensagem = 'Nenhum hábito concluído ainda';
    }else{
        mensagem = `${progresso}% dos hábitos concluídos`;
    } 
    
    return(
        <PageContainer>

            <Header />

            <ContainerInfoHoje progresso={progresso}>
                <p data-test="today">{weekday}, {dayjs().format('DD/MM')}</p>
                <p data-test="today-counter">{mensagem}</p>
            </ContainerInfoHoje>
            
            {todayHabits.map(habit => (
                <Habit habit={habit} key={habit.id} recarregar={recarregar} setRecarregar={setRecarregar}/>)
            )}

            <Footer />

        </PageContainer>
    )
}


