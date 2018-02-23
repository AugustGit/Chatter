const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

const PORT = 3001;
const server = express()

  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};

wss.on('connection', (ws) => {
          console.log('Client connected');

  let serverCountJSON = {type: "usersConnected", usercount : server._connections }
    serverCountJSON.usercount = server._connections
    broadcast(JSON.stringify(serverCountJSON));

 ws.on('message', function incoming(message) {
  let messageJSON = JSON.parse(message);

   console.log(messageJSON.username, " said: ", messageJSON.content);
    let id = uuidv4();
    messageJSON.id = id
    console.log(id)

  broadcast(JSON.stringify(messageJSON));
  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', (serverCountJSON) => {

    serverCountJSON = {type: "usersConnected", usercount : server._connections }
    serverCountJSON.usercount = server._connections
    broadcast(JSON.stringify(serverCountJSON));
    console.log('Client disconnected')
    });
});