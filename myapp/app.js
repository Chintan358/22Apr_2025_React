const { log } = require("console")
const express = require("express")
const app = express()
const http = require('http').createServer(app)
const PORT = 3000
const path = require('path')


const publicpath = path.join(__dirname, "public")
app.use(express.static(publicpath))


app.get("/", (req, resp) => {
    resp.sendFile(__dirname + "/index.html")
})

http.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`);
})



//******************************socket server*********** */


const io = require("socket.io")(http)

io.on('connection', (socket) => {


    socket.on('message', (msg) => {
       
        socket.broadcast.emit('message', msg)

    })

})