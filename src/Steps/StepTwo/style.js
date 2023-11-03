import styled from "styled-components";

const StyledStepTwo = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    .slots {
        display: flex;
        .slot {
            position: relative;
            height: 250px;
            width: 250px;
            display: flex;
            padding: 24px;
            &::before {
                content: "";
                background-color: rgba(0, 0, 0, 0.3);
                height: 100%;
                width: 100%;
                border-radius: 50%;
            }
            .choice {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                transform: scale(1.4);
                animation: display-choice 0.3s 0s;
            }
        }
    }

    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 50px;
        overflow: hidden;
        width: 0;
        opacity: 0;
        transition: 0.5s all;
        &.display {
            width: 200px;
            opacity: 1;
        }
        .status {
            color: white;
            font-size: 42px;
            font-weight: 800;
            width: 170px;
            text-align: center;
            margin-bottom: 12px;
        }
        .btn-retry {
            width: 150px;
            padding: 10px 0;
            border: none;
            border-radius: 4px;
            background: white;
            transition: 0.2s color;
            letter-spacing: 2px;
            font-family: inherit;
            &:hover {
                color: red;
            }
        }
    }
    .result.md-size {
        display: none;
    }

    @media screen and (max-width: 766px) {
        width: 100%;
        .slots {
            width: 100%;
            margin: auto;
            max-width: 350px;
            .slot-container {
                &:last-of-type {
                    margin-left: auto;
                }
                .slot {
                    width: 150px;
                    height: 150px;

                    .choice {
                        transform: none;
                        width: 125px;
                        height: 125px;
                        padding: 15px;
                        .logo-container {
                            .icon {
                                transform: scale(0.8);
                            }
                        }
                    }
                }
            }
        }
        .result {
            display: none;
        }
        .result.md-size {
            display: flex;
            margin: auto;
            .status {
                color: white;
                font-size: 48px;
                font-weight: 800;
                width: 300px;
                text-align: center;
                margin-bottom: 12px;
            }
            .btn-retry {
                width: 300px;
                padding: 10px 0;
                border: none;
                border-radius: 8px;
                background: white;
                transition: 0.2s color;
                letter-spacing: 2px;
                font-family: inherit;
                &:hover {
                    color: red;
                }
            }
        }
    }

    @keyframes display-choice {
        0% {
            opacity: 0.6;
            transform: scale(0.4);
        }

        80% {
            opacity: 1;
            transform: scale(1.6);
        }

        100% {
            opacity: 1;
            transform: scale(1.4);
        }
    } ;
`;

export default StyledStepTwo;
