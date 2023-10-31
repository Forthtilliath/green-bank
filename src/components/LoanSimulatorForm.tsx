import {
  energies,
  mileagePerYear,
  passagers,
  vehicleTypes,
  years,
} from "@/assets/data/loanInputsData";
import { RadioGroup } from "./ui/RadioGroup";
import { calculateRateLoan } from "@/helpers/calculateRateLoan";
import { z } from "zod";
import { useState } from "react";
import { type ResultForm } from "@/app/simulator/page";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FormSchema = z.object({
  type: z.enum(["citadine", "cabriolet", "berline", "suv"], {
    required_error: "Merci de choisir un type de véhicule.",
  }),
  energy: z.enum(["essence", "electric", "gas", "diesel", "hybrid"], {
    required_error: "Merci de choisir l'énergie.",
  }),
  mileagePerYear: z.enum(
    ["5to10k", "10to15k", "15to20k", "20to25k", "25to30k"],
    {
      required_error: "Merci de choisir le kilométrage.",
    }
  ),
  years: z.enum(["1960-1970", "1970-1980", "1990-2000", "2000-2010", "2010+"], {
    required_error: "Merci de choisir l'année de fabrication.",
  }),
  passagers: z.enum(["x1", "x2", "x3", "x4"], {
    required_error: "Merci de choisir un nombre de passagers.",
  }),
});

export type FormSchema = z.infer<typeof FormSchema>;
type InputName = keyof FormSchema;

type Props = {
  onSubmit: ({ data, rate }: ResultForm) => void;
};

export function LoanSimulatorForm({ onSubmit }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [errors, setErrors] = useState<Record<InputName, string[]>>({
    type: [],
    energy: [],
    mileagePerYear: [],
    years: [],
    passagers: [],
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const data = FormSchema.parse(Object.fromEntries(formData));
      const rate = calculateRateLoan(data);

      const params = new URLSearchParams(searchParams);
      Object.entries(data).forEach(([name, value]) => params.set(name, value));
      router.push(`${pathname}?${params.toString()}`);

      onSubmit({ data, rate });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formatedErrors = err.errors.reduce<Record<InputName, string[]>>(
          (acc, err) => {
            const path = err.path as InputName[];
            path.forEach((inputName) => acc[inputName].push(err.message));
            return acc;
          },
          {
            type: [],
            energy: [],
            mileagePerYear: [],
            years: [],
            passagers: [],
          }
        );
        setErrors(formatedErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <RadioGroup
          title="Type de véhicule"
          name="type"
          options={vehicleTypes}
          errors={errors.type}
          defaultValue={searchParams.get("type")}
        />
      </div>

      <div className="mt-8">
        <RadioGroup
          title="Energie"
          name="energy"
          options={energies}
          errors={errors.energy}
          defaultValue={searchParams.get("energy")}
        />
      </div>

      <div className="mt-8">
        <RadioGroup
          title="Kilometrage par an"
          name="mileagePerYear"
          options={mileagePerYear}
          errors={errors.mileagePerYear}
          defaultValue={searchParams.get("mileagePerYear")}
        />
      </div>

      <div className="mt-8">
        <RadioGroup
          title="Année"
          name="years"
          options={years}
          errors={errors.years}
          defaultValue={searchParams.get("years")}
        />
      </div>

      <div className="mt-8">
        <RadioGroup
          title="Passagers"
          name="passagers"
          options={passagers}
          errors={errors.passagers}
          defaultValue={searchParams.get("passagers")}
        />
      </div>

      <div className="mt-8">
        <button
          className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Calculer mon taux d&apos;emprunt
        </button>
      </div>
    </form>
  );
}
