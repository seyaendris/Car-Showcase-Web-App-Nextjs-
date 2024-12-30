import { CarProps } from '@/types'
import React, { Fragment } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

interface CarDetailsProps {
    isOpen: boolean,
    closeModal: () => void,
    car: CarProps,
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
        <Transition appear as={Fragment} show={isOpen}>
            <div className="transition duration-300 ease-in data-[closed]:opacity-0">I will fade in and out</div>
        </Transition>
      
    </>
  )
}

export default CarDetails
