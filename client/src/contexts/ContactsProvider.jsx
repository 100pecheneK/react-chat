import React, { useContext } from 'react'
import useLocalstorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export default function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalstorage('contacts', [])
  const createContact = (id, name) => {
    setContacts(prevContacts => [...prevContacts, { id, name }])
  }
  const updateContact = (id, name) => {
    setContacts(prevContacts =>
      prevContacts.map(contact => {
        if (contact.id === id) {
          contact.name = name
        }
        return contact
      })
    )
  }
  return (
    <ContactsContext.Provider
      value={{ contacts, createContact, updateContact }}
    >
      {children}
    </ContactsContext.Provider>
  )
}
