const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

const port = process.env.PORT || 3333
const URL_DB = 'mongodb+srv://melmario:melmario1234@cluster0-j2h1y.mongodb.net/omnistack10?retryWrites=true&w=majority'

mongoose.set('useCreateIndex', true)
mongoose.connect(URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected'))
    .catch(err => console.log('FAILD DB', err))

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(port, () => console.log(`Server is runing on port ${ port }`))