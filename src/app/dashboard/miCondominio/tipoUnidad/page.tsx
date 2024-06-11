'use client'
import { useEffect, useState } from "react";
import api from "@/api/unitType";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import { CPagination } from "@/components/Custom";
import { CTable } from "@/components/Custom/Table/CTable";
import { FaHouseMedical } from "react-icons/fa6";
import { useForm } from "@/hooks/useForm";

const headerData = [
  'Unidad',
  'Acciones'
]



const UnitTypePage = () => {

  const [unitType, setUnitType] = useState([])
  const { formState, onInputChange } = useForm({ unitTypeSearch: '' })
  const [filteredUnitType, setFilteredUnitType] = useState([]);
  const [paginatedUnitType, setPaginatedUnitType] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { unitTypeSearch } = formState
  const itemsPerPage = 10;

  const getUnitTypes = async () => {
  const { data } = await api.getUnitTypes()
  setUnitType(data)
  setFilteredUnitType(data)
  setPaginatedUnitType(data.slice(0, itemsPerPage))
}

  useEffect(() => {
   
    getUnitTypes()

  }, [])

  const filterSearch = () => {
    if (!unitTypeSearch) {
      return
    }
    const filteredResults = unitType.filter((unit) =>
      unit?.description.toLowerCase().includes(unitTypeSearch.toLowerCase())
    );
    setFilteredUnitType(filteredResults);
    setCurrentPage(1)
    setPaginatedUnitType(filteredResults.slice(0, itemsPerPage));
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedUnitType(filteredUnitType.slice(startIndex, endIndex));
  };

  return (
    <div>
      <Breadcrumb pageName="Tipo de Unidad" />

      <section className="border border-stroke bg-white  min-h-8 min-w-full rounded my-4 dark:border-strokedark dark:bg-boxdark">

        <div className="flex gap-4 items-center p-4">
          <Input label="Tipo de Unidad"
            isClearable
            placeholder="Casa"
            name="unitTypeSearch"
            value={unitTypeSearch}
            onChange={onInputChange}
            onClear={() => setUnitType(unitType)}
          />
          <div className=" w-[250rem]">

          </div>
          <Button onClick={filterSearch} >Buscar</Button>
        </div>
      </section>

      <Link href={'/dashboard/miCondominio/tipoUnidad/register'}>
        <FaHouseMedical size={25} />
      </Link>

      <CTable headerData={headerData} rowData={paginatedUnitType} />

      <CPagination 
        data={filteredUnitType} 
        page={currentPage} 
        itemsPerPage={itemsPerPage} 
        handlePageChange={handlePageChange} 
      />
    </div>
  );
};

export default UnitTypePage;
