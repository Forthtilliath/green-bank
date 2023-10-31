import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Green Bank - Simuler un emprunt",
  description: "Réaliser un simulateur d’emprunt  pour l’achat d’une voiture",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
