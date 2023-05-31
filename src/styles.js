import styled from "styled-components";

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;
    img{
        width: 155px;
    }
    p{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 69px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
        margin-bottom: 15px;
    }
    a{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #52B6FF;
    }
`;

export const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 20px;
    button {
        align-self: center;
        width: calc(100vw - 40px);
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        &:hover{
            cursor: pointer;
        }
    }
    input {
        width: calc(100vw - 60px);
    }
`;