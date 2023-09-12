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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    > h3 {
        text-align: center;
        font-size: 13px;
        font-weight: 300;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 1px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    
    .loginSession {
        display: flex;
        flex-direction: column;

        > input {
            padding: 8px 2px;
            background-color: #4285F4;
            border: 1px solid #4285F4;
            border-radius: 15px;
            font-size: 13px;
            text-indent: 10px;
            color: #fff;
            font-weight: 300;
            font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 8px;
            
        }

        > input::placeholder {
            color: #fff;
        }

        > input:focus {
            outline: 0 none;
            background-color: #4285F4;
            transition: 0.25s all;
            color: #fff
        }

        .loginButton {
            text-align: center;
            width: 100%;
            padding: 8px 2px;
            background-color: #fff;
            border: 1px solid #4285F4;
            border-radius: 15px;
            font-size: 15px;
            color: #4285F4;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    .createAccount{
        display: flex;
        align-items: center;
        justify-content: center;
        
        h3 {
            text-align: center;
            font-size: 15px;
            font-weight: 300;
            font-family: Arial, Helvetica, sans-serif;
        }

        .create {
            margin-left: 10px;
            font-size: 14px;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed; /* Fixa a div na posição */
    bottom: 50px; /* Coloca a div na parte inferior da janela */
    left: 0; /* Opcional: alinhar à esquerda */
    right: 0; /* Opcional: alinhar à direita */
    padding: 10px; /* Preenchimento desejado */

    h3 {
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 8px;
    }

    .googleButton{
        text-align: center;
        width: 50%;
        padding: 8px 2px;
        background-color: #fff;
        border: 1px solid #4285F4;
        border-radius: 15px;
        font-size: 15px;
        color: #4285F4;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
    }
`;