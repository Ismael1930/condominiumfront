'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import { BsPersonPlusFill } from "react-icons/bs";
import Link from "next/link";
import { Button } from '@nextui-org/button';
import { Autocomplete, AutocompleteItem, Input } from '@nextui-org/react';
import { CPagination } from "@/components/Custom";


const blocks = [
  { label: 'Bloque 1', value: 1 },
  { label: 'Bloque 2', value: 2 },
  { label: 'Bloque 3', value: 3 },
  { label: 'Bloque 4', value: 4 },
  { label: 'Bloque 5', value: 5 },
  { label: "Bloque 6", value: 6 },
  { label: 'Bloque 7', value: 7 },
 
]
const builds = [
  { label: 'Edificio 1', value: 1 },
  { label: 'Edificio 2', value: 2 },
  { label: 'Edificio 3', value: 3 },
  { label: 'Edificio 4', value: 4 },
  { label: 'Edificio 5', value: 5 },
  { label: "Edificio 6", value: 6 },
  { label: 'Edificio 7', value: 7 },
 
]
const units = [
  { label: 'Apartamento 1', value: 1 },
  { label: 'Apartamento 2', value: 2 },
  { label: 'Apartamento 3', value: 3 },
  { label: 'Apartamento 4', value: 4 },
  { label: 'Apartamento 5', value: 5 },
  { label: "Apartamento 6", value: 6 },
  { label: 'Apartamento 7', value: 7 },
 
]


const ResidentsPage = () => {
  return (
    <div>
      <p>Lista de residentes de todo el condominio | Gestionar a los residentes</p>
      <Breadcrumb pageName="Residentes" />
      <section className="border border-stroke bg-white  min-h-8 min-w-full rounded my-4 dark:border-strokedark dark:bg-boxdark">
        <div className="flex gap-4 items-center p-4">
          <Input label="Nombre" placeholder="Julian"/>
          <Autocomplete
            label="Bloques"
            placeholder="Buscar un Bloque"
            className="max-w-xs"
            defaultItems={blocks}
          >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
          </Autocomplete>
          <Autocomplete
            label="Edificios"
            placeholder="Buscar un Edificio"
            className="max-w-xs"
            defaultItems={builds}
          >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
          </Autocomplete>
          <Autocomplete
            label="Unidad"
            placeholder="Buscar una Unidad"
            className="max-w-xs"
            defaultItems={units}
          >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
          </Autocomplete>
          <Button >Buscar</Button>
        </div>
      </section>
      <Link href={'/dashboard/miCondominio/residentes/register'}>
        <BsPersonPlusFill size={25} />
      </Link>
      <TableThree />
      <CPagination/>
    </div>
  );
};

export default ResidentsPage;
