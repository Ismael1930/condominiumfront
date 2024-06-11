
import {Pagination} from "@nextui-org/react";
import { pages } from "next/dist/build/templates/app-page";

interface Props {
    data : object[]
    itemsPerPage : number
    handlePageChange : (value : number) => void
    page: number
}

export const CPagination = ({data, itemsPerPage, handlePageChange, page}: Props) => {

    const start = ((page -1) * itemsPerPage) + 1;
    const end = start + itemsPerPage
    const onPageChange = (value: number) => {
        handlePageChange(value)
    }
    
    return (
        <div className="flex items-center justify-between border border-stroke bg-white px-4 py-3 sm:px-6 mt-4 dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Viendo del
                        <span className="font-medium"> {start} </span>
                        hasta
                        <span className="font-medium"> {end > data.length? data.length : end} </span>
                        de
                        <span className="font-medium"> {data.length} </span>
                        resultados
                    </p>
                </div>
                <div>
                    <Pagination 
                        disableAnimation={false} 
                        showControls 
                        total={Math.ceil(data.length / itemsPerPage)} 
                        initialPage={1}
                        onChange={onPageChange}
                        page={page}
                    />
                </div>
            </div>
        </div>

    )
}
