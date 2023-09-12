"use client";

import Image from 'next/image';
import api from '../services/api';
import { useEffect, useState } from 'react';

export default function Home() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/schedule")
      .then((resp) => setMessage(resp.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  return (
    <main className="">
      <h1>Criar Agendamento</h1>
      <form action="">
        <label for="name">Profissional</label>
        <input type="text" id="name" name="name"/>
        <br/>
        <label for="name">Seu Nome</label>
        <input type="text" id="name" name="name"/>
        <br/>
        <label for="service">Serviço</label>
        <input type="text" id="service" name="service" />
        <br/>
        <label for="service">Data de agendamento</label>
        <input type="text" id="schedule" name="schedule" />
        <br/>
        <button>Agendar</button>
      </form>
    </main>
  )
}
