"use client";

import Image from 'next/image';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Container, ContentWrapper, FooterWrapper, NavWrapper } from './style';
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [message, setMessage] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push("/schedules")
  }

  return (
    <Container>
      <NavWrapper>
        <img src="calenday.png" alt="" />
        <h3>facilitando seu dia-a-dia <br />
          com seus clientes</h3>
      </NavWrapper>
      <ContentWrapper>
        <div className="loginSession">
          <input type="email" placeholder="E-mail"/>
          <input placeholder="Senha"/>
          <button onClick={handleClick} className="loginButton">Entrar</button>
        </div>
        <div className="createAccount">
          <h3>Ainda não tem conta?</h3>
          <u className="create">Clique Aqui</u>
        </div>
      </ContentWrapper>
      <FooterWrapper>
        <h3>ou se preferir</h3>
        <button onClick={handleClick} className="googleButton">Entrar com Google</button>
      </FooterWrapper>
      
    </Container>
  )
}
