
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Comdominium",
  description: "App Web para la Gestión de condominios",
};

export default function Home() {
  return (

    redirect('/dashboard/miCondominio')

  );
}
