import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export const InputSearch = () => {

    // const [searchTerm, setSearchTerm] = useState('');

    // const handleInputChange = (event: { target: { value: any; }; }) => {
    //   const value = event.target.value;
    //   setSearchTerm(value); // Actualiza el estado con el valor del campo de entrada
    //   onSearch(value); // Llama al evento personalizado con el valor de búsqueda
    // };

    return (
        <div>
            <form action="#" method="POST">
                <div className="relative">
                    <button className="absolute left-0 top-1/2 -translate-y-1/2">
                        <BsSearch />
                    </button>

                    <input
                        className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                        type="text"
                        placeholder="Type to search..."
                        // value={searchTerm}
                        // onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    )
}
