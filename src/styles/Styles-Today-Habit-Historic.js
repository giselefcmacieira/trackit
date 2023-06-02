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
    a{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
        text-decoration: none;
    }
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
        margin-bottom: 12px;
    }
`;

 export const ContainerInfoHoje = styled.div`
 width: 100%;
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start; 
 padding: 10px;
 margin-top: 20px;
 p:first-child{
     font-family: 'Lexend Deca';
     font-style: normal;
     font-weight: 400;
     font-size: 23px;
     line-height: 29px;
     color: #126BA5;
     margin-bottom: 5px:
 }
 p:nth-child(2){
     font-family: 'Lexend Deca';
     font-style: normal;
     font-weight: 400;
     font-size: 18px;
     line-height: 22px;
     color: ${props => {
         if(props.progresso > 0){
             return '#8FC549';
         }else{
             return '#BABABA';
         }
     }};
 }
`;

export const ContainerHabits = styled.div`
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 15px;
    width: 92%;
    padding: 13px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    }
    img{
        position: absolute;
        top: 11px;
        right: 10px;
        width: 13px;
    }
`;

export const ContainerMyHabits = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    width: 100%;
    padding: 0 18px 0 18px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    div{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`;

export const ContainerAddHabit = styled.div`
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    width: 92%;
    padding: 0 18px 0 18px;
    background-color: white;
    border-radius: 5px;
    padding-top: 18px;
    div:nth-child(2){
        width: 97%;
        display:flex;
        justify-content: flex-start;
    }
    div:nth-child(3){
        width: 98%;
        display:flex;
        justify-content: flex-end;
        margin-top: 15px;
        margin-bottom: 15px;
        button:first-child{
            width: 84px;
            height: 35px;
            border: none;
            background-color: transparent;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
            margin-right: 23px;
        }
        button:nth-child(2){
            display: flex;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 35px;
            border: none;
            background: #52B6FF;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            &:disabled{
                opacity: 0.7;
            }
        }
    }
`;

export const FormContainer = styled.form`
    width: 100%; 
    display: flex;
    justify-content: center;
    font-size: 20px;
    input {
        width: 100%;
        &:disabled{
            background-color: #F2F2F2;
        }
    }
`;

export const ContainerMensagem = styled.div`
    box-sizing: border-box;
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 18px;
    margin-top: 10px;
`;

export const ContainerHistorico = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 17px;
p:first-child{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-bottom: 17px;
}
p:nth-child(2){
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`;
