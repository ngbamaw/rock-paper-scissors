import styled from "styled-components";
interface IChoice extends React.ButtonHTMLAttributes<string> {
    startGradient: string;  
    endGradient: string;  
}
const StyledChoice = styled.button<IChoice>`
    border-radius: 50%;
    box-shadow: inset 0px -5px 0px 0px rgb(0 0 0 / 20%);
    border: none;
    width: 175px;
    height: 175px;
    padding: 20px;
    transition: 0.1s all;
    &:hover {
        transform: scale(1.2);
    }
    
    background: linear-gradient(
        ${({ startGradient }) => startGradient},
        ${({ endGradient }) => endGradient}
    );
    .logo-container {
        box-shadow: inset 0px 5px 0px 0px rgb(0 0 0 / 20%);
        height: 100%;
        width: 100%;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default StyledChoice;
