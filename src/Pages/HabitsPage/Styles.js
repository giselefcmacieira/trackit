import styled from "styled-components";

export const PageContainer = styled.div`
    margin-top: 70px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #E5E5E5;
    height: 100%; //trocar dps
    text-decoration: none;

`
export const Topo = styled.div`
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 18px 8px 18px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 4;
    p{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 100px;
    }
`
export const Menu = styled.div`
    box-sizing: border-box;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px 10px 30px;
    background-color: white;
    position: fixed;
    bottom: 0px;
    left: 0px;
`;

export const ContainerProgressBar = styled.div`
    box-sizing: border-box;
    width: 91px;
    height: 91px;
    font-family: 'Lexend Deca';
    text-align: center;
    margin-bottom: 38px;
    p{
        color: white;
    }
`

export const Text = styled.div`
    display:flex;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
        text-decoration: none;
    }
    &:hover{
        cursor: pointer;
    }
`;