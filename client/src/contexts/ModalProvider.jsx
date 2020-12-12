import React, { useContext, useState } from 'react'
import Modals from '../components/Modals'

const ModalContext = React.createContext()

export function useModal() {
  return useContext(ModalContext)
}

export default function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalName, setModalName] = useState()
  const [initialValue, setInitialValue] = useState()
  const [options, setOptions] = useState()

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModal = (name, initialValue, options) => {
    setInitialValue(initialValue)
    setOptions(options)
    setModalName(name)
    setModalOpen(true)
  }

  const value = {
    openModal,
    closeModal,
    modalOpen,
    render: (
      <Modals
        modalName={modalName}
        initialValue={initialValue}
        options={options}
      />
    ),
  }
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
