import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	input {
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		height: 45px;
		margin-bottom: 10px;
		padding: 0 10px;
		font-family: 'Lexend Deca';
		font-size: 20px;
		display: flex;
		align-items: center;
		color: #AFAFAF;
		font-weight: 400;
		line-height: 25px;
		&::placeholder{
			font-family: 'Lexend Deca';
			font-style: normal;
			color: #DBDBDB;
			font-weight: 400;
			line-height: 25px;
		}
		
	}
`

export default GlobalStyle