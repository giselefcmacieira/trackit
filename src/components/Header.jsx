import { Topo } from "../styles/Styles-Today-Habit-Historic"
import { infProfile } from "../constants/Context"
import { useContext } from "react";

export default function Header(){

    const [infProfi, setInfProfi] = useContext(infProfile);

    return(
    <Topo data-test="header">
        <p>TrackIt</p>
        <img data-test="avatar" src={infProfi.image}></img>
    </Topo>
    );
}
