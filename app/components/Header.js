import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <div>
      <Image
        src={logo}
        className="rounded-full"
        alt="logo"
        width={100}
        height={100}
      />
      <h1 className="text-4xl font-bold pb-6 text-teal-500">
        {"Calculateur d'IMC"}
      </h1>
    </div>
  );
}
