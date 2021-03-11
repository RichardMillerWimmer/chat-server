const { static } = require('express');
const express = require('express');
const mc = require('./controllers/messages_controller')

const app = express();
const port = 3001;

app.use(express.json())
app.use(static(__dirname + '/../public/build'))

app.get('/api/messages', mc.read)
app.post('/api/messages', mc.create)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)





app.listen(port, () => console.log(`Server is running on ${port}`))