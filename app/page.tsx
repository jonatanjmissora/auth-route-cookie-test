'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("")
    const user = {
      name: event.currentTarget.name.value,
      password: event.currentTarget.password.value,
    };
    event.currentTarget.reset();
    try {
      const res = await fetch("api/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await res.json()

      if(data.message === "Autorizado")
        router.push("/dashboard")
      else throw new Error("Usuario no autorizado")

    } catch (e) {
      setMessage("Usuario no autorizado")
      console.error(e.message);
    }
  };

  return (
    <section className="text-black bg-gray-500 h-screen flex gap-8 flex-col justify-center items-center bg-green">
      <h1>FORM</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2 gap-2">
        <input type="text" name="name" />
        <input type="text" name="password" />
        <button>Enviar</button>
      </form>
      <h2>{message}</h2>
    </section>
  );
}
