import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({ closeModal, initialValue, options }) {
  const { createContact, updateContact } = useContacts()

  const [form, setForm] = useState({
    id: initialValue?.id ? initialValue.id : '',
    name: initialValue?.name ? initialValue.name : '',
  })

  const { id, name } = form
  const handleChange = e => {
    setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (options?.update) {
      updateContact(id.trim(), name)
    } else {
      createContact(id.trim(), name)
    }
    closeModal()
  }

  return (
    <div>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control
              type='text'
              name='id'
              value={id}
              disabled={!!options?.update}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type='submit'>Create</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}
