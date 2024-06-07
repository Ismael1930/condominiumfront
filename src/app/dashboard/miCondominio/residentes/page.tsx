import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import { Metadata } from "next";
import { BsPersonPlusFill } from "react-icons/bs";
import Link from "next/link";
import { Pagination } from "@/components/Custom";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import { Autocomplete, TextField } from "@mui/material";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

export const metadata: Metadata = {
  title: "Residentes",
  description:
    "Gestión de Residentes",
};


const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
]


const ResidentsPage = () => {
  return (
    <div>
      <p>Lista de residentes de todo el condominio | Gestionar a los residentes</p>
      <Breadcrumb pageName="Residentes" />
      <section className="bg-white  min-h-8 min-w-full rounded my-4">
        <div className="flex gap-4 items-center p-4">
          <TextField label="Nombre" variant="outlined" className="w-full" />
          <SelectGroupOne labelName="Edificios" />
          <SelectGroupOne labelName="Unidad" />
          <div>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Buscar
            </Link>
          </div>
        </div>
      </section>
      <Link href={'/dashboard/miCondominio/residentes/register'}>
        <BsPersonPlusFill size={25} />
      </Link>
      <TableThree />
      <Pagination />
    </div>
  );
};

export default ResidentsPage;
