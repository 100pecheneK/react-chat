import React, { useState, useCallback } from 'react'
import {
  Form,
  Button,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'
import { useModal } from '../contexts/ModalProvider'

export default function OpenConversation() {
  const [text, setText] = useState('')
  const { sendMessage, selectedConversation } = useConversations()
  const { contacts } = useContacts()

  const { openModal } = useModal()

  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    if (!text) return
    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      text
    )
    setText('')
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }
  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div
        className='border-bottom d-flex justify-content-end align-items-center px-2 py-1'
        style={{ height: '42px' }}
      >
        {selectedConversation.recipients.map((r, i) => {
          if (checkIsInMyContact(r, contacts)) {
            return (
              <OverlayTrigger
                key={r.id}
                placement={'bottom'}
                overlay={<Tooltip>{'Edit contact'}</Tooltip>}
              >
                <Button
                  variant='light'
                  className={`${i && 'ml-2'}`}
                  onClick={() =>
                    openModal(
                      'contact',
                      {
                        id: selectedConversation.recipients[i].id,
                        name: selectedConversation.recipients[i].name,
                      },
                      { update: true }
                    )
                  }
                >
                  {r.name}
                </Button>
              </OverlayTrigger>
            )
          } else {
            return (
              <OverlayTrigger
                key={r.id}
                placement={'bottom'}
                overlay={<Tooltip>{'Add to contacts'}</Tooltip>}
              >
                <Button
                  onClick={() =>
                    openModal('contact', {
                      id: selectedConversation.recipients[i].id,
                    })
                  }
                >
                  {!i ? r.name : `Unknown ${i + 1}`}
                </Button>
              </OverlayTrigger>
            )
          }
        })}
      </div>
      <div className='flex-grow-1 overflow-auto'>
        <div className='d-flex flex-column align-items-start justify-content-end px-3 pt-2'>
          {selectedConversation.messages.map((message, index) => (
            <div
              key={index}
              ref={
                selectedConversation.messages.length - 1 === index
                  ? setRef
                  : null
              }
              className={`'my-1 d-flex flex-column ${
                message.fromMe
                  ? 'align-self-end align-items-end'
                  : 'align-items-start'
              }`}
            >
              <div
                className={`rounded px-2 py-1 ${
                  message.fromMe ? 'bg-primary text-white' : 'border'
                }`}
              >
                {message.text}
              </div>
              <div
                className={`text-muted small ${
                  message.fromMe ? 'text-right' : ''
                }`}
              >
                {message.fromMe ? 'You' : message.senderName}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='m-2'>
          <InputGroup>
            <Form.Control
              as='textarea'
              required
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
              onKeyPress={onKeyPress}
            />
            <InputGroup.Append>
              <Button type='submit'>Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}

function checkIsInMyContact(recipient, contacts) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].id === recipient.id) {
      return true
    }
  }
  return false
}
