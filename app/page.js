"use client";
import Image from "next/image";
import { useState } from "react";
import Splashscreen from "./components/Splashscreen";
import Header from "./components/Header";
import IMCForm from "./components/IMCForm";
// Enregistrement des éléments nécessaires pour Chart.js

export default function Home() {
  const [isloading, setIsloading] = useState(true);
  setTimeout(() => {
    console.log("chargement");
    setIsloading(false);
  }, 2000);
  return (
    <>
      {isloading ? (
        <Splashscreen />
      ) : (
        <main className="mx-5 animate__animated animate__fadeIn">
          <Header />
          <p className="pb-5 text-xl">
            Calculez votre indice de masse corporelle en indiquant votre poids
            (en kg) et votre taille (en cm)
          </p>
          <IMCForm />
        </main>
      )}
    </>
  );
}
