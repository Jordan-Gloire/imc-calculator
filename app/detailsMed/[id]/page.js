import React from "react";
import Image from "next/image";
import HomeImg from "/public/home6.webp";
import mydb from "../../myDB";
import "animate.css";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function DetailsMedecins(props) {
  const id = props.params.id;
  const medDetail = mydb.find((med) => String(med.id) === id);
  return (
    <div>
      <div className="">
        <Image
          className="w-screen  object-cover h-52"
          src={HomeImg}
          alt="logo"
          height={200}
          width={200}
        />
      </div>
      <Link
        href={"/Medecins"}
        className="bg-white hover:bg-teal-500 duration-300 ease-linear m-4 h-10 w-10 text-2xl rounded-full absolute top-0 left-0 right-0"
      >
        <ArrowLeftOutlined className="p-2" />
      </Link>
      <div>
        <div className="animate__animated animate__fadeIn bg-teal-600 flex mt-2 mb-2 justify-start items-center text-white">
          <div className="mx-8">
            <Image
              className="w-20 h-20 rounded-full my-2"
              src={medDetail.image}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-2">{medDetail.nom_complet}</h1>
            <h2 className="text-black pb-2">{medDetail.specialite}</h2>
            <h2 className="text-black pb-2">{medDetail.adresse}</h2>
            <h2 className="text-black pb-2">{medDetail.telephone}</h2>
            <hr className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
