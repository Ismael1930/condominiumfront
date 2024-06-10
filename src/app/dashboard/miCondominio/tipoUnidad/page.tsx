'use client'
import { useEffect, useState } from "react";
import api from "@/api/unitType";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Button } from '@nextui-org/button';
import { Autocomplete, AutocompleteItem, Input } from '@nextui-org/react';
import { CPagination } from "@/components/Custom";
import { CTable } from "@/components/Custom/Table/CTable";
import { FaHouseMedical } from "react-icons/fa6";


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

const headerData = [
  'Unidad',
  'Acciones'
]

const rowData = [
  {id: 1, description: 'Apartamento'},
  {id: 2, description: 'Penthouse'},
  {id: 3, description: 'Casa'},
]




const ResidentsPage = () => {
  const [unitType, setUnitType] = useState(rowData)

  useEffect(() => {
    const getUnitTypes = async () => {
      const {data} = await api.getUnitTypes()
      setUnitType(data)
    }
    getUnitTypes()
  },[unitType])

  return (
    <div>
      <Breadcrumb pageName="Tipo de Unidad" />
      <section className="border border-stroke bg-white  min-h-8 min-w-full rounded my-4 dark:border-strokedark dark:bg-boxdark">
        <div className="flex gap-4 items-center p-4">
          <Input label="Unidad" placeholder="A-1"/>
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
          <Button >Buscar</Button>
        </div>
      </section>
      <Link href={'/dashboard/miCondominio/tipoUnidad/register'}>
        <FaHouseMedical size={25} />
      </Link>
      <CTable  headerData={headerData} rowData={unitType}/>
      <CPagination/>
    </div>
  );
};

export default ResidentsPage;
