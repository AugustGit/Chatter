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
  }

  componentWillMount() {
    // Fetch data from the server
    // $.getJSON('/messages').then(...)
    // Put it in a variable, then...
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


 handleMessage = (content) => {
  const newMessage = {
    type:'message',
    username: this.state.username,
    content: content
  }
//not supposed to push?
  let messages = this.state.messages
  messages = [...messages, ...[newMessage]]
  //messages.concat(newMessage)
  this.setState({message: messages})
 }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }



  render() {

    return (

      <div>
      <Navbar/>
      {(this.state.messages.length > 0) &&
       <MessageList messages={this.state.messages}/>
      }
      <Chatbar handleMessage={this.handleMessage}/>
      </div>

    );
  }
}
export default App;

