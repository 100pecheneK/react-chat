import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import config from '../config'
const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}
export default function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState()
  useEffect(() => {
    const newSocket = io(config.SERVER_URL, {
      transports: ['websocket'],
      query: { id },
    })

    setSocket(newSocket)
    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
