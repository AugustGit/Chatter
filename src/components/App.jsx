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
      username: 'Anonymous',
      messages: []
    }
  }

  componentWillMount() {
    // Fetch data from the server
    // $.getJSON('/messages').then(...)
    // Put it in a variable, then...
    this.setState({
      messages: [

      {
        type: 'message',
        username: "Bob",
        content: "Has anyone seen my marbles?",
      },
      {
        type: 'message',
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      },
        {
          type: 'system',
          username: 'Jacob Allen',
          content: "did something"
        }
      ]
    })
  }


 handleMessage = (content) => {
  const newMessage = {
    type:'message',
    username: this.state.username,
    content: content
  }
//not supposed to push?
  let messages = this.state.messages
  messages.push (newMessage)
  this.setState({message: messages})
 }

  render() {

    return (

      <div>
      <Navbar/>
      {(this.state.messages.length > 0) &&
       <MessageList messages={this.state.messages}/>
      }
      <Chatbar handleMessage={this.handleMes}/>
      </div>

    );
  }
}
export default App;

