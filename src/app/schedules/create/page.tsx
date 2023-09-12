"use client";

import Image from 'next/image';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import { Container, ContentWrapper, FooterWrapper, NavWrapper } from './style';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter()
  const [message, setMessage] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault()
  }

  const handleBack = (e: any) => {
    e.preventDefault()
    router.back()
  }

  const buttonSymbol = "<"

  return (
    <Container className="">
      <NavWrapper>
        <button onClick={handleBack}>{buttonSymbol}</button>
        <h1 className="pageTitle">Criar Agendamento</h1>
        <div className="profile">
          <img src="/profile.jpg" alt="profile" width={40} />
        </div>
      </NavWrapper>
      <ContentWrapper>
        
      </ContentWrapper>
      <FooterWrapper>
        <button className="scheduleButton" onClick={handleClick}>Próximo</button>
      </FooterWrapper>
    </Container>
  )
}
