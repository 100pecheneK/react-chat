import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
const { Label, Control, Group } = Form

export default function Login({ onIdSubmit }) {
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (value) {
      onIdSubmit(value)
    }
  }

  const createNewId = () => {
    onIdSubmit(uuidV4())
  }

  return (
    <Container
      className='d-flex align-items-center'
      style={{ height: '100vh' }}
    >
      <Form onSubmit={handleSubmit} className='w-100'>
        <Group>
          <Label>Enter Your Id</Label>
          <Control type='text' onChange={handleChange} value={value} required />
        </Group>
        <Button type='submit' className='mr-2'>
          Login
        </Button>
        <Button variant='secondary' onClick={createNewId}>
          Create A New Id
        </Button>
      </Form>
    </Container>
  )
}
