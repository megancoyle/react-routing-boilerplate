const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

// for static assets
app.use(express.static(__dirname + '/public'))

// successful routes
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("Server listening on port " + port)
