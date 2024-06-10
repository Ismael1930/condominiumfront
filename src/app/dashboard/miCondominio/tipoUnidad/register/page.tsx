'use client'

import api from '@/api/unitType'
import { useForm } from '@/hooks/useForm'
import {useRouter } from 'next/navigation'
import React from 'react'


interface UserRegister {
  username: String,
  email: String,
  phoneNumber: String,
  password: String
}

export default function UserRegisterPage() {

  const { onInputChange, formState } = useForm({ Description: ''})

  const { Description } = formState

  const router = useRouter()

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    await api.registerUnitType(formState)
    router.push('/dashboard/miCondominio/tipoUnidad')
  }


  return (

    <div className='flex justify-center mt-20'>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-180 ">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
           Registro de Tipo de Unidad 
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Tipo de Unidad
              </label>
              <input
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                type="text"
                placeholder="Apartamento"
                name='Description'
                value={Description}
                onChange={onInputChange}
              />
            </div>
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
