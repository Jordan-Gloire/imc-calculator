"use client";
import React from "react";
import { Chart, registerables } from "chart.js";
import { useState, useRef, useEffect } from "react";
Chart.register(...registerables);
import "animate.css";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import imgHome from "../../public/poids (3).jpg";
import Image from "next/image";
export default function Graphik() {
  const canvasRef = useRef(null);
  useEffect(() => {
    let chartInstance;
    // let imc = 50;

    if (canvasRef.current) {
      // Si un graphique est déjà présent, le détruire avant d'en créer un nouveau
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Créer un nouveau graphique
      chartInstance = new Chart(canvasRef.current, {
        type: "line",
        data: {
          labels: ["Semaine 01", "Semaine 02", "Semaine 03", "Semaine 04"],
          datasets: [
            {
              label: "Votre IMC",
              backgroundColor: "##14b8a6",
              borderColor: "#14b8a6",
              borderWidth: 3,
              data: [10, 23, 30, 15],
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: true },
            title: {
              display: true,
              text: "Votre IMC",
            },
          },
        },
      });
    }

    // Nettoyage pour détruire le graphique lors du démontage du composant
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);
  return (
    <div>
      <div>
        <Image
          src={imgHome}
          className="w-screen"
          alt="logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl text-center font-bold pt-5 mx-5 text-teal-500">
          {"Votre progression monsuelle"}
        </h1>
      </div>
      <Link
        href={"/"}
        className="bg-teal-500 hover:bg-black duration-300 ease-linear m-4 h-10 w-10 text-2xl rounded-full absolute top-0 left-0 right-0"
      >
        <ArrowLeftOutlined className="p-2" />
      </Link>
      <div className="mx-5 animate__animated animate__fadeInUp mt-5 animate__animated animate__fadeInUp">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
