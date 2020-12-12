const path = require('path')

const express = require('express')
const app = express()

const http = require('http').createServer(app)

const port = process.env.PORT || 5000
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:' + port,
    methods: ['GET', 'POST'],
  },
})

app.use(express.static(path.join(__dirname, '../client/build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

io.on('connection', socket => {
  const id = socket.handshake.query.id
  socket.join(id)
  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients,
        sender: id,
        text,
      })
    })
  })
})

http.listen(port)
