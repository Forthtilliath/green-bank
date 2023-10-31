import { User } from "lucide-react";

export const vehicleTypes = [
  {
    label: "Citadine",
    desc: (
      <>
        <span className="underline">Poids moyen</span> :<br />
        800 à 1300kg
      </>
    ),
    value: "citadine",
  },
  {
    label: "Cabriolet",
    desc: (
      <>
        <span className="underline">Poids moyen</span> :<br />
        1300 à 2000kg
      </>
    ),
    value: "cabriolet",
  },
  {
    label: "Berline",
    desc: (
      <>
        <span className="underline">Poids moyen</span> :<br />
        1300 à 1800kg
      </>
    ),
    value: "berline",
  },
  {
    label: "SUV / 4x4",
    desc: (
      <>
        <span className="underline">Poids moyen</span> :<br />
        1500 à 2500kg
      </>
    ),
    value: "suv",
  },
];

export const energies = [
  {
    label: "Essence",
    value: "essence",
  },
  {
    label: "Electrique",
    value: "electric",
  },
  {
    label: "Gaz",
    value: "gas",
  },
  {
    label: "Diesel",
    value: "diesel",
  },
  {
    label: "Hybride",
    value: "hybrid",
  },
];

export const mileagePerYear = [
  {
    label: "5 à 10K",
    value: "5to10k",
  },
  {
    label: "10 à 15K",
    value: "10to15k",
  },
  {
    label: "15 à 20K",
    value: "15to20k",
  },
  {
    label: "20 à 25K",
    value: "20to25k",
  },
  {
    label: "25 à 30K",
    value: "25to30k",
  },
];

export const years = [
  {
    label: "1960-1970",
    value: "1960-1970",
  },
  {
    label: "1970-1980",
    value: "1970-1980",
  },
  {
    label: "1990-2000",
    value: "1990-2000",
  },
  {
    label: "2000-2010",
    value: "2000-2010",
  },
  {
    label: "Après 2010",
    value: "2010+",
  },
];

export const passagers = [
  {
    label: (
      <div className="flex items-center gap-2">
        <User /> x1
      </div>
    ),
    value: "x1",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <User /> x2
      </div>
    ),
    value: "x2",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <User /> x3
      </div>
    ),
    value: "x3",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <User /> x4
      </div>
    ),
    value: "x4",
  },
];
