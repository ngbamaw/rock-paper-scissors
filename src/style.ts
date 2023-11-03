import styled from "styled-components";
import Box from "@mui/material/Box";

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    max-height: 100vh;
    position: relative;
    font-family: "Barlow Semi Condensed", sans-serif;
    html,
    body {
        overflow: hidden;
        max-height: 100vh;
    }
    .header {
        display: flex;
        padding: 24px 28px;
        margin-top: 5vh;
        width: 80%;
        max-width: 1000px;
        border-radius: 12px;
        border: 4px solid white;
        .list-item {
            height: fit-content;
            list-style: none;
            margin: auto 0;
            margin-left: 12px;
            li {
                color: white;
                font-weight: 700;
                font-size: 42px;
                line-height: 34px;
            }
        }
        .card-score {
            margin-left: auto;
            background-color: white;
            padding: 20px 0;
            width: 160px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 8px;

            .title {
                font-size: 16px;
                color: hsl(229, 64%, 46%);
                letter-spacing: 4px;
            }
            .number {
                font-size: 70px;
                font-weight: 700;
                line-height: 60px;
                vertical-align: bottom;
                color: hsl(217, 16%, 45%);
            }
        }
    }
    .btn-rules {
        border: 2px solid white;
        border-radius: 10px;
        background-color: transparent;
        margin-left: auto;
        margin-top: auto;
        margin-right: 12px;
        margin-bottom: 12px;
        color: white;
        padding: 10px 36px;
        font-size: 16px;
        font-weight: 800;
        font-family: inherit;
        letter-spacing: 2px;
    }
    height: 100vh;
    background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    @media screen and (max-width: 766px) {
        .btn-rules {
            margin: auto;
            margin-bottom: 12px;
            transform: translateY(-48px);
        }
        .header {
            .list-item {
                height: fit-content;
                list-style: none;
                margin: auto 0;
                li {
                    color: white;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 22px;
                }
            }
            .card-score {
                margin-left: auto;
                background-color: white;
                padding: 18px 0;
                width: 100px;

                .title {
                    font-size: 12px;
                    color: hsl(229, 64%, 46%);
                    letter-spacing: 4px;
                }
                .number {
                    font-size: 55px;
                    font-weight: 700;
                    line-height: 45px;
                    vertical-align: bottom;
                    color: hsl(217, 16%, 45%);
                }
            }
        }
    }
`;

export const StyledBox = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    background-color: white;
    padding: 24px;
    border-radius: 12px;
    outline: none;

    .modal-header {
        display: flex;
        margin-bottom: 48px;
        .modal-title {
            color: hsl(229, 25%, 31%);
            font-weight: 800;
            font-size: 24px;
        }
        .btn-close {
            margin-left: auto;
            background: transparent;
            border: none;
        }
    }
`;
