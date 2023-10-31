"use client";

import Image from "next/image";
import img from "@/assets/img/photo-1497435334941-8c899ee9e8e9.webp";
import { useState } from "react";
import {
  type FormSchema,
  LoanSimulatorForm,
} from "@/components/LoanSimulatorForm";
import { LinkButton } from "@/components/LinkButton";
import { PreviewResult } from "@/components/PreviewResult";

export type ResultForm = {
  data: FormSchema;
  rate: number;
};

export default function Simulator() {
  const [result, setResult] = useState<ResultForm | null>(null);

  return (
    <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      <div className="relative mx-auto w-full h-28 md:h-auto">
        <Image
          src={img}
          alt="aerial photography of grass field with blue solar panels"
          className="h-full w-full object-cover rounded-md"
          priority
        />
        <div className="absolute inset-0 bg-gray-700/40 rounded-md"></div>
        <div className="absolute inset-0 p-5">
          <h2 className="text-white text-3xl font-bold text-center">
            Simuler un emprunt pour l’achat d’une voiture
          </h2>
        </div>
      </div>
      {result ? (
        <PreviewResult result={result} reset={() => setResult(null)} />
      ) : (
        <LoanSimulatorForm onSubmit={setResult} key={Math.random()} />
      )}
    </div>
  );
}
