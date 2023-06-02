import { Menu, ContainerProgressBar } from "../styles/Styles-Today-Habit-Historic"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import { Link } from "react-router-dom"
import { percent } from "../constants/Context"
import { useContext } from "react"


export default function Footer(){

    const [progresso, setProgresso] = useContext(percent);

    return(
        <Menu data-test="menu">

            <Link to='/habitos' data-test="habit-link">Habitos</Link>
                    
            <Link data-test="today-link" to='/hoje'>
                <ContainerProgressBar >
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

            <Link to='/historico' data-test="history-link">Histórico</Link>

        </Menu>
    )

}

