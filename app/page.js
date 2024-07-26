"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/congoLogo.jpg";
import top from "../public/poids (3).jpg";
import Link from "next/link";
import { MedicineBoxOutlined, UserOutlined } from "@ant-design/icons";
import "animate.css";
export default function Home() {
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [poids, setPoids] = useState("");
  const [tail, setTail] = useState("");
  const [imc, setImc] = useState(null);
  const [conseils, setConseils] = useState("");
  const votreImc = (e) => {
    e.preventDefault();
    // setTail(tail / 100);
    if (tail === "" || poids === "") {
      let erreurChamps = "Veuillez remplir tous les champs";
      setMessageError(erreurChamps);
      setIsError(true);
    } else if (tail === 0 || poids === 0) {
      setIsError(true);
      let erreurChamps = "Le poids et la taille doivent être supérieurs à 0";
      setMessageError(erreurChamps);
    } else {
      const tailleEnMetre = parseFloat(tail) / 100;
      let imc = poids / (tailleEnMetre * tailleEnMetre);
      setImc(imc.toFixed(1));
      setPoids("");
      setTail("");
      let adviceText = "";
      if (imc < 18.5) {
        setConseils(
          "Consultez un nutritionniste pour des conseils sur la prise de poids."
        );
      } else if (imc >= 18.5 && imc < 25) {
        setConseils(
          "Maintenez une alimentation équilibrée et faites régulièrement de l’exercice."
        );
      } else if (imc >= 25 && imc < 30) {
        setConseils(
          "Consultez un professionnel de santé pour des conseils sur la gestion du poids."
        );
      } else {
        setConseils(
          "Consultez un spécialiste pour des conseils sur la réduction de l’obésité."
        );
      }
    }
  };
  return (
    <main className="p-6 animate__animated animate__fadeIn">
      <Image
        src={logo}
        className="rounded-full"
        alt="logo"
        width={100}
        height={100}
      />
      <h1 className="text-4xl font-bold py-6 text-blue-900">
        {"Calculateur d'IMC"}
      </h1>
      <p className="pb-5 text-xl">
        Calculez votre indice de masse corporelle en indiquant votre poids (en
        kg) et votre taille (en cm)
      </p>
      <form className="flex flex-col justify-center items-center space-y-3 animate__animated animate__fadeInRight">
        <div className="space-y-4">
          <label className=" font-bold">Poids (en kg)</label>
          <input
            value={poids}
            onChange={(e) => setPoids(e.target.value)}
            name="poids"
            className="py-3 w-full px-6 rounded-md bg-slate-200 font-bold"
            type="number"
          />
          <label className="font-bold">Taille (en cm)</label>
          <input
            onChange={(e) => setTail(e.target.value)}
            value={tail}
            name="tail"
            className="py-3 px-6 rounded-md w-full bg-slate-200 font-bold"
            type="number"
          />
        </div>
        <button
          onClick={votreImc}
          className="py-3 px-6  w-full rounded-md bg-blue-700 hover:bg-blue-800 duration-300 ease-linear text-white"
          type="submit"
        >
          Calculer votre IMC
        </button>
        <p>Votre IMC :</p>
        <p className="font-bold text-5xl">{imc}</p>
        <p className="font-bold text-xl text-center">{conseils}</p>
        <p className="text-red-600">{isError ? messageError : ""}</p>
        <Link
          className="w-full text-2xl  flex justify-center  items-center py-3 px-6 rounded-md bg-red-600 hover:bg-blue-800 duration-300 ease-linear text-white"
          href="/Medecins"
        >
          <MedicineBoxOutlined className="pr-4 " />
          {/* <UserOutlined className="text-2xl" /> */}
          Consulter un medecin
        </Link>
      </form>
    </main>
  );
}
