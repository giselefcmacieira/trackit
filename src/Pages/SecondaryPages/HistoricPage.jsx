import { useContext } from "react";
import { infProfile } from "../../constants/Context";
import { PageContainer, ContainerHistorico } from "../../styles/Styles-Today-Habit-Historic";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HistoricPage(){

    const [infProfi, setInfProfi] = useContext(infProfile);

    return(
        <PageContainer>
    
            <Header />

            <ContainerHistorico>
                <p>Histórico</p>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ContainerHistorico>

            <Footer />
        </PageContainer>
    );
}

