import { ResultForm } from "@/app/simulator/page";
import { LinkButton } from "./LinkButton";
import {
  energies,
  mileagePerYear,
  passagers,
  vehicleTypes,
  years,
} from "@/assets/data/loanInputsData";
import { PreviewRow } from "./PreviewRow";

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
      <PreviewRow
        label="Type de véhicule"
        data={vehicleTypes}
        value={result.data.type}
      />
      <PreviewRow label="Energie" data={energies} value={result.data.energy} />
      <PreviewRow
        label="Kilometrage par an"
        data={mileagePerYear}
        value={result.data.mileagePerYear}
      />
      <PreviewRow label="Année" data={years} value={result.data.years} />
      <PreviewRow label="Passagers" value={result.data.passagers} />

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
