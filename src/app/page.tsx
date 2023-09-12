"use client";

import Image from 'next/image';
import api from '../services/api';
import { useEffect, useState } from 'react';
import { Container, NavWrapper } from './style';

export default function Home() {

  const [message, setMessage] = useState("");

  return (
    <Container>
      <NavWrapper>
        <img src="calenday.png" alt="" />
      </NavWrapper>
      
    </Container>
  )
}
