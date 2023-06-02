import { useContext, useEffect, useState } from "react";
import { infProfile, percent } from "../../constants/Context";
import { PageContainer, ContainerHabits, ContainerMyHabits, ContainerAddHabit, FormContainer, ContainerMensagem } from "../../styles/Styles-Today-Habit-Historic";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { WEEKDAYS } from "../../constants/const";
import WeekDays from "../../components/WeekDays";
import { ThreeDots } from  'react-loader-spinner';
import HabitDays from "../../components/HabitDays";
import Trash from "../../assets/Group.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HabitPage(){

    const [infProfi, setInfProfi] = useContext(infProfile);

    const [progresso, setProgresso] = useContext(percent);

    console.log(progresso);

    const [habitos, setHabitos] = useState([]);

    const [addHabit, setAddHabit] = useState(false);

    const [mensagem, setMensagem] = useState('');

    const [name, setName] = useState('');
    
    const [days, setDays] = useState([]);

    const [selected, setSelected] = useState([false, false, false, false, false, false, false]);

    const [isDisabled, setIsDisabled] = useState(false);

    const [delet, setDelet] = useState(false);

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
        const config = {headers: {'Authorization': `Bearer ${infProfi.token}`}};
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
            const config = {headers: {'Authorization': `Bearer ${infProfi.token}`}};
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
        const config = {headers: {'Authorization': `Bearer ${infProfi.token}`}};
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
                <ContainerHabits data-test="habit-container" key={habito.id}>
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

            <Footer />

        </PageContainer>
        </body>
    );
}
