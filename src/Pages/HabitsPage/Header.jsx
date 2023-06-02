import { Topo } from "./Styles"
import { infProfile } from "../../constants/Context"
import { useContext } from "react";

export default function Header(){

    const infProfi = useContext(infProfile);

    return(
    <Topo data-test="header">
        <p>TrackIt</p>
        <img data-test="avatar" src={infProfi[0].image}></img>
    </Topo>
    );
}
