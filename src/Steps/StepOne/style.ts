import styled from "styled-components";

const StyledStepOne = styled.div`
    position: relative;
    padding: 60px;
    margin: auto;
    .choice {
        position: absolute;
        &:nth-of-type(1) {
            top: 0;
            left: 0;
            /* transform: translateX(-50%) translateY(-50%); */
            animation: display-choice 0.2s 0s;
        }
        &:nth-of-type(2) {
            top: 0;
            right: 0;
            /* transform: translateX(50%) translateY(-50%); */
            animation: display-choice 0.2s 0.1s;
        }
        &:nth-of-type(3) {
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            animation: display-choice 0.2s 0.15s;
            /* transform: translateY(50%); */
        }
    }
    @keyframes display-choice {
        0% {
            opacity: 0.6;
            transform: scale(0.4);
        }

        90% {
            opacity: 1;
            transform: scale(1.2);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media screen and (max-width: 766px) {
        & {
            transform: scale(0.7);
            margin: 0;
        }
    }
`;

export default StyledStepOne;
