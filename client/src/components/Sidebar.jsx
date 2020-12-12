import React, { useState } from 'react'
import { Tab, Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import { useModal } from '../contexts/ModalProvider'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
const { Container: TabContainer, Content: TabContent, Pane: TabPane } = Tab
const { Item: NavItem, Link: NavLink } = Nav

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const modal = useModal()
  const conversationOpen = activeKey === CONVERSATIONS_KEY
  const [isCopied, handleCopy] = useCopyToClipboard(5000)

  const openModal = () => {
    if (conversationOpen) {
      modal.openModal('conversation')
    } else {
      modal.openModal('contact')
    }
  }

  return (
    <div style={{ width: '250px' }} className='d-flex flex-column'>
      <TabContainer activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant='tabs' className='justify-content-center'>
          <NavItem>
            <NavLink eventKey={CONVERSATIONS_KEY}>Conversations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={CONTACTS_KEY}>Contacts</NavLink>
          </NavItem>
        </Nav>
        <TabContent className='border-right overflow-auto flex-grow-1'>
          <TabPane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </TabPane>
          <TabPane eventKey={CONTACTS_KEY}>
            <Contacts />
          </TabPane>
        </TabContent>
        <OverlayTrigger
          placement={'top'}
          overlay={<Tooltip>{isCopied ? 'Copied!' : 'Click to copy'}</Tooltip>}
        >
          <div
            className='p-2 border-top border-right small'
            style={{ cursor: 'pointer' }}
            onClick={() => handleCopy(id)}
          >
            Your Id: <span className='text-muted'>{id}</span>
          </div>
        </OverlayTrigger>
        <Button onClick={openModal} className='rounded-0'>
          New {conversationOpen ? 'Conversation' : 'Contact'}
        </Button>
        {modal.render}
      </TabContainer>
    </div>
  )
}
