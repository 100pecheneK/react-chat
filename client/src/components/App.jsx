import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Login from './Login'
import Dashboard from './Dashboard'
import ContactsProvider from '../contexts/ContactsProvider'
import ConversationsProvider from '../contexts/ConversationsProvider'
import SocketProvider from '../contexts/SocketProvider'
import ModalProvider from '../contexts/ModalProvider'

function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <SocketProvider id={id}>
      <ModalProvider>
        <ContactsProvider>
          <ConversationsProvider id={id}>
            <Dashboard id={id} />
          </ConversationsProvider>
        </ContactsProvider>
      </ModalProvider>
    </SocketProvider>
  )
  return id ? dashboard : <Login onIdSubmit={setId} />
}

export default App
