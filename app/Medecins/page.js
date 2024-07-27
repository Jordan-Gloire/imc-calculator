"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import HomeImg from "/public/home4.jpg";
import mydb from "../myDB";
import Link from "next/link";
import "animate.css";

import { ArrowLeftOutlined } from "@ant-design/icons";
function Medecins() {
  return (
    <div>
      <div className="animate__animated animate__fadeIn">
        <Image
          className="w-screen  object-cover h-52"
          src={HomeImg}
          alt="logo"
          height={200}
          width={200}
        />
      </div>
      <Link
        href={"/"}
        className="bg-white hover:bg-teal-500 duration-300 ease-linear m-4 h-10 w-10 text-2xl rounded-full absolute top-0 left-0 right-0"
      >
        <ArrowLeftOutlined className="p-2" />
      </Link>
      <div>
        {mydb.map((med, index) => {
          return (
            <div
              key={index}
              className="animate__animated animate__fadeInUp bg-teal-600 flex mt-2 mb-2 justify-start items-center text-white"
            >
              <div className="mx-8">
                <Image
                  className="w-20 h-20 rounded-full my-2"
                  src={med.image}
                  alt="logo"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold pt-2">{med.nom_complet}</h1>
                <h2 className="text-black pb-2">{med.specialite}</h2>
                <hr className="" />
                <div className="py-4">
                  <Link
                    href={`/detailsMed/${med.id}`}
                    className="bg-white text-black py-1 px-4 rounded-lg font-bold"
                  >
                    Informations
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Medecins;
