"use client"

import { CarProps } from '@/types'
import React, { Fragment } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
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
            <Dialog as='div'  onClose={closeModal} className="relative z-50">
                <TransitionChild
                     as={Fragment}
                     enter='ease-out duration-300'
                     enterFrom='opacity-0'
                     enterTo='opacity-100'
                     leave='ease-in duration-200'
                     leaveFrom='opacity-100'
                     leaveTo='opacity-0'
                    >
                    <div className='fixed inset-0 bg-black bg-opacity-25'>
                    </div>
                </TransitionChild>

                {/* <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                    <Description>This will permanently deactivate your account</Description>
                    <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                    <div className="flex gap-4">
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                    </div>
                </DialogPanel>
                </div> */}
                
            </Dialog>
        </Transition>
      
    </>
  )
}

export default CarDetails
