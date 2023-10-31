import { ResultForm } from "@/app/simulator/page";
import { LinkButton } from "./LinkButton";

type Props = {
  result: ResultForm;
  reset: () => void;
};

export function PreviewResult({ result, reset }: Props) {
  return (
    <fieldset className="space-y-4">
      <div className="flex items-center justify-between py-4 border-b border-gray-300">
        <legend className="text-2xl text-gray-700 mr-4">
          Résumé du véhicule
        </legend>
      </div>
      <p>
        <span className="font-semibold">Type de véhicule</span> :{" "}
        {result.data.type}
      </p>
      <p>
        <span className="font-semibold">Energie</span> : {result.data.energy}
      </p>
      <p>
        <span className="font-semibold">Kilometrage par an</span> :{" "}
        {result.data.mileagePerYear}
      </p>
      <p>
        <span className="font-semibold">Année</span> : {result.data.years}
      </p>
      <p>
        <span className="font-semibold">Passagers</span> :{" "}
        {result.data.passagers}
      </p>
      <p className="text-white text-lg bg-app-midnight p-4 rounded w-fit">
        <span className="font-semibold underline underline-offset-4">
          Taux de l&apos;emprunt
        </span>{" "}
        : <span>{result.rate}%</span>
      </p>
      <LinkButton onClick={reset} replace>
        Démarrer une nouvelle simulation
      </LinkButton>
    </fieldset>
  );
}
