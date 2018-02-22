// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');



// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.





wss.on('connection', (ws) => {
          console.log('Client connected');
  let serverCountJSON = {type: "usersConnected", usercount : server._connections }
    serverCountJSON.usercount = server._connections
            console.log(" # of connections ",  serverCountJSON)
  ws.send(JSON.stringify(serverCountJSON));

 ws.on('message', function incoming(message) {
  let messageJSON = JSON.parse(message);
   //for (message of messageJSON ){
   console.log(messageJSON.username, " said: ", messageJSON.content);
    let id = uuidv4();
    messageJSON.id = id
    console.log(id)
  ws.send(JSON.stringify(messageJSON));

  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});