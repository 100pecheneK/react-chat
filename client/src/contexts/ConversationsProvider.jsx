import React, { useContext, useEffect, useState, useCallback } from 'react'
import useLocalstorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'
import { useSocket } from './SocketProvider'

const ConversationsContext = React.createContext()

export function useConversations() {
  return useContext(ConversationsContext)
}

export default function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalstorage('conversations', [])
  const { contacts } = useContacts()
  const [selectedConversationIndex, setSelectedConversationIndex] = useState()
  const socket = useSocket()
  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => contact.id === recipient)
      const name = (contact && contact.name) || recipient
      return { id: recipient, name }
    })
    const messages = conversation.messages.map(message => {
      const contact = contacts.find(contact => contact.id === message.sender)
      const name = (contact && contact.name) || message.sender
      const fromMe = id === message.sender
      return { ...message, senderName: name, fromMe }
    })
    const selected = index === selectedConversationIndex
    return { ...conversation, messages, recipients, selected }
  })

  function createConversation(recipients) {
    setConversations(prevConversations => [
      ...prevConversations,
      { recipients, messages: [] },
    ])
  }

  const addMessageToConversation = useCallback(
    ({ recipients, text, sender }) => {
      setConversations(prevConversations => {
        let madeChange = false
        const newMessage = { sender, text }

        let i = -1
        let currentConversation = prevConversations.find(
          (conversation, index) => {
            i = index
            return arrayEcuality(conversation.recipients, recipients)
          }
        )
        if (currentConversation && i >= 0) {
          madeChange = true
          currentConversation = {
            ...currentConversation,
            messages: [...currentConversation.messages, newMessage],
          }
        }

        let newConversations
        if (madeChange) {
          newConversations = [
            currentConversation,
            ...prevConversations.slice(0, i),
            ...prevConversations.slice(i + 1),
          ]
        } else {
          newConversations = [
            { recipients, messages: [newMessage] },
            ...prevConversations,
          ]
        }

        if (selectedConversationIndex) {
          if (selectedConversationIndex === i) {
            setSelectedConversationIndex(0)
          } else {
            const si = newConversations.findIndex(c =>
              arrayEcuality(
                c.recipients,
                prevConversations[selectedConversationIndex].recipients
              )
            )
            setSelectedConversationIndex(si)
          }
        }
        return newConversations
      })
    },
    [setConversations, selectedConversationIndex]
  )

  useEffect(() => {
    if (!socket) return
    socket.on('receive-message', addMessageToConversation)
    return () => socket.off('receive-message')
  }, [socket, addMessageToConversation])

  function sendMessage(recipients, text) {
    socket.emit('send-message', { recipients, text })
    addMessageToConversation({ recipients, text, sender: id })
  }

  function selectConversationIndex(index) {
    setSelectedConversationIndex(prevIndex => {
      if (prevIndex === index) {
        return null
      } else {
        return index
      }
    })
  }

  const value = {
    conversations: formattedConversations,
    createConversation,
    selectedConversationIndex: selectedConversationIndex,
    selectedConversation: formattedConversations[selectedConversationIndex],
    selectConversationIndex,
    sendMessage,
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}

function arrayEcuality(a, b) {
  if (a.length !== b.length) {
    return false
  }
  a.sort()
  b.sort()
  return a.every((e, i) => {
    return e === b[i]
  })
}
