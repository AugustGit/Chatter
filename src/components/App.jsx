import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import MessageSystem from './SystemMessage.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: 'message',
      username: 'Anonymous',
      messages: []
    }
    this.socket = new WebSocket("ws:localhost:3001");
  }

  componentWillMount() {
    // Fetch data from the server
    // $.getJSON('/messages').then(...)
    // Put it in a variable, then...
    console.log("COMPONENT WILL MOUNT")
    console.log(this.state.messages)
    this.setState({
      messages: [
                {
                  id: 0,
                  type: 'message',
                  username: "Bob",
                  content: "Has anyone seen my marbles?",
                },
                {
                  id: 1,
                  type: 'message',
                  username: "Anonymous",
                  content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
                },
                  {
                    id: 2,
                    type: 'system',
                    username: 'Jacob Allen',
                    content: "did something"
                  }
                ]
    })
  }

componentDidMount() {
  this.socket.onopen = (event) => {
       console.log("Socket open")
       let messages = this.state.messages
       this.socket.send (JSON.stringify(messages));
  }
}

 handleMessage = (content) => {

  const newMessage = {
    id: this.state.messages.length++,
    type:'message',
    username: this.state.username,
    content: content
  }
  let messages = this.state.messages
  messages.push(newMessage)
  this.setState({message: messages})
 }

  render() {

    return (
      <div>
      <Navbar/>

       <MessageList messages={this.state.messages}/>

      <Chatbar handleMessage={this.handleMessage}/>
      </div>

    );
  }
}
export default App;

