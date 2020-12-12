import React from 'react'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import { Modal } from 'react-bootstrap'
import { useModal } from '../contexts/ModalProvider'

export default function Modals({ modalName, initialValue, options }) {
  const { modalOpen, closeModal } = useModal()

  const modals = {
    conversation: <NewConversationModal closeModal={closeModal} />,
    contact: (
      <NewContactModal
        initialValue={initialValue}
        closeModal={closeModal}
        options={options}
      />
    ),
  }

  return (
    <Modal show={modalOpen} onHide={closeModal}>
      {modals[modalName]}
    </Modal>
  )
}
