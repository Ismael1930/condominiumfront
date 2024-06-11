'use client'
import React from 'react'
import api from '@/api/unitType'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react"
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import {useRouter}  from 'next/navigation';

interface RowDataItem {
    id: number;
    description: string;
}

interface Props {
    headerData: string[],
    rowData: RowDataItem[]
}



export const CTable = ({ headerData, rowData }: Props) => {
    
    const router = useRouter()
    const RemoveUnitType = async (unitType) => {
        await api.removeUnitType(unitType)
        router.push('./tipoUnidad')
    }
        
        return (
        <Table isStriped aria-label="Example static collection table">
            <TableHeader>
                {headerData.map((head, key) => <TableColumn key={key}>{head}</TableColumn>)}
            </TableHeader>
            <TableBody emptyContent={'No hay Información que mostrar'}>
                {rowData.map(row =>
                    <TableRow key={row.id}>
                        <TableCell>{row.description}</TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Tooltip content="Editar Tipo de Unidad">
                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                        <Link href={`/dashboard/miCondominio/tipoUnidad/edit/${row.id}`}>
                                            <FaEdit />
                                        </Link>
                                    </span>
                                </Tooltip>
                                <Tooltip color="danger" content="Eliminar Tipo de unidad">
                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                        <MdDelete onClick={() => RemoveUnitType(row)} />
                                    </span>
                                </Tooltip>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
