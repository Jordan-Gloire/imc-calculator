import React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BarChartOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import "animate.css";
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function IMCForm({ onAddData }) {
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [poids, setPoids] = useState("");
  const [tail, setTail] = useState("");
  const [imc, setImc] = useState(null);
  const [conseils, setConseils] = useState("");
  const notify = () => toast.error("Veuillez remplir tous les champs !");

  const votreImc = (e) => {
    e.preventDefault();

    if (tail === "" || poids === "") {
      setMessageError("Veuillez remplir tous les champs");
      setIsError(true);
      notify();
    } else if (tail === 0 || poids === 0) {
      setIsError(true);
      setMessageError("Le poids et la taille doivent être supérieurs à 0");
    } else {
      const tailleEnMetre = parseFloat(tail) / 100;
      let imc = poids / (tailleEnMetre * tailleEnMetre);
      setImc(imc.toFixed(1));
      const semaine = new Date().getWeek(); // Utiliser la semaine actuelle
      onAddData(semaine, imc);
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
    <div>
      <form className="flex flex-col justify-center items-center space-y-3 animate__animated animate__fadeInRight">
        <div className="space-y-4">
          <label className="font-bold">Poids (en kg)</label>
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
          className="py-3 text-xl px-6 w-full font-semibold rounded-md bg-teal-500 hover:bg-teal-800 duration-300 ease-linear text-white"
          type="submit"
        >
          Calculer votre IMC
        </button>
        <p className="font-bold text-5xl">{imc}</p>
        <p className="font-bold text-xl text-center">{conseils}</p>

        <Link
          className="w-full text-2xl flex justify-center items-center py-3 px-6 rounded-md bg-red-600 hover:bg-red-800 duration-300 ease-linear text-white"
          href="/Medecins"
        >
          <MedicineBoxOutlined className="pr-4 " />
          Consulter un medecin
        </Link>
        <Link
          className="w-full text-2xl flex justify-center items-center py-3 px-6 rounded-md bg-teal-500 hover:bg-teal-700 duration-300 ease-linear text-white"
          href="/Graphik"
        >
          <BarChartOutlined className="pr-4 " />
          {"Suivre l'évolution de votre IMC"}
        </Link>
      </form>

      <p className="text-red-600">
        {isError ? (
          <ToastContainer position="top-center" transition={Slide} />
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
