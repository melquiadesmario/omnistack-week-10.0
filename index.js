const express = require('express')

const app = express()
const port = process.env.PORT || 3333

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Dev'})
})

app.listen(port, () => console.log(`Server is runing on port ${ port }`))