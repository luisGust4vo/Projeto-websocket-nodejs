const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");
dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT || 3333});


wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on("message",(data) => {
    wss.clients.forEach((client) => ws.send(data.toString()))
  })

  console.log("client connected!");

});