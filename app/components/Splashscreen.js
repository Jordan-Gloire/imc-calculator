"use client";
import React from "react";
import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
export default function Splashscreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!loading) return null;
  return (
    <div className="animate__animated animate__fadeIn flex flex-col justify-center items-center">
      <Image
        className="w-screen animate-pulse"
        src={logo}
        alt="logo"
        width={200}
        height={200}
      />
      <h1 className="animate__animated animate__backInUp text-3xl font-bold pb-6 text-teal-500">
        {"Calculateur d'IMC"}
      </h1>
    </div>
  );
}
