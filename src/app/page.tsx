import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto rounded-lg shadow-lg flex justify-between p-24 bg-gray-100 text-gray-900">
      <LinkButton>
        Faire une simulation d&apos;emprunt pour l&apos;achat d&apos;une voiture
      </LinkButton>
    </main>
  );
}
