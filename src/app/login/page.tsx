"use client";

import Image from 'next/image';
import api from '../../services/api';
import { useEffect, useState } from 'react';

export default function Login() {

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
      <h1>Fazer Login</h1>
      <form action="">
        <label for="name">Email</label>
        <input type="text" id="name" name="name"/>
        <br/>
        <label for="name">Senha</label>
        <input type="text" id="name" name="name"/>
        <button>Login</button>
      </form>
    </main>
  )
}
