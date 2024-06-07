'use client'

import api from '@/api/authApi'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useForm } from '@/hooks/useForm'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'


interface UserRegister {
  username: String,
  email: String,
  phoneNumber: String,
  password: String
}

export default function UserRegisterPage() {

  const { onInputChange, formState } = useForm({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  })

  const { username, email, phoneNumber, password } = formState

  const router = useRouter()

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    await api.userRegister(formState)
    router.push('/dashboard/miCondominio/residentes')
  }


  return (

    <div className='flex justify-center mt-20'>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-180 ">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            User Register
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Name
              </label>
              <input
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                type="text"
                placeholder="Enter your full name"
                name='username'
                value={username}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Email
              </label>
              <input
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                type="email"
                placeholder="Enter your email address"
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Phone Number
              </label>
              <input
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                type="text"
                placeholder="Enter phone number"
                name='phoneNumber'
                value={phoneNumber}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-5.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Password
              </label>
              <input
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                type="password"
                placeholder="Re-enter password"
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
