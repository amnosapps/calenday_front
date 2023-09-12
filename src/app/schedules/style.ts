import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
`;

export const NavWrapper = styled.div`
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    align-content: center;

    > button {
        border: none;
        background-color: transparent;
        font-weight: 400;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .pageTitle {
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 300;
        text-align: center;
    }

    .profile {
        > img {
            border-radius: 50%;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    .pageTitleWrapper {
        display: flex;
        align-items: center;
        align-content: center;
    }

    .pageTitle {
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 300;
        text-align: center;
    }

    .calendarWrapper {
        display: flex;
        align-items: center;
        padding: 20px 0;

        .MuiDateCalendar-root {
            background-color: #4285F4;
            border-radius: 10px;
            color: #fff;
        }
    }
    
`;

export const SchedulesWrapper = styled.div`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: start;

    .scheduleTitle {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

export const Schedule = styled.div`
    display: flex;
    width: 100%;
    .scheduleHour {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
        > h1 {
            font-size: 15px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400;
            background-color: #4285F4;
            padding: 18px 8px;
            border-radius: 50%;
            color: #fff;
        }
    }

    .scheduleContent {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;

        > div > h1 {
            font-size: 15px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 500;
            padding-left: 10px;
        } 

        > div .scheduleGuest {
            font-weight: 700;
        }
        
    }
`;

export const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    position: fixed; /* Fixa a div na posição */
    bottom: 50px; /* Coloca a div na parte inferior da janela */
    left: 0; /* Opcional: alinhar à esquerda */
    right: 0; /* Opcional: alinhar à direita */
    background-color: #f1f1f1; /* Cor de fundo desejada */
    padding: 10px; /* Preenchimento desejado */

    .scheduleButton{
        width: 100%;
        padding: 8px 2px;
        background-color: #fff;
        border: 1px solid #4285F4;
        border-radius: 15px;
        font-size: 16px;
        color: #4285F4;
        font-weight: 700;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

