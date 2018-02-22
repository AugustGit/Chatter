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
   // this.handleChange = this.handleChange.bind(this);
 //   this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // Fetch data from the server
    // $.getJSON('/messages').then(...)
    // Put it in a variable, then...
    console.log("COMPONENT WILL MOUNT")
    console.log(this.state.messages)
    this.setState({
        usercount: 0,
        messages: [
                {
                  id: 0,
                  type: 'message',
                  username: "Bob",
                  content: "Has anyone seen my marbles?",
                }
                ]
    })
  }

  componentDidMount() {
    this.socket.onopen = (event) => {
         console.log("Socket open")
         let messages = this.state.messages

    }
    this.socket.onmessage = (event) =>  {
     console.log("event ", event)
     let messageJSON = JSON.parse(event.data);
       if(messageJSON.type === "usersConnected") {
        let count = messageJSON.usercount
        this.setState({usercount: count})
        console.log("NEW USER COUNT ", this.state.usercount)
       } else {
      let messages = this.state.messages;
        messages.push(messageJSON)
        this.setState({messages: messages})
      }
   }
  }




  handleMessage = (content) => {
  console.log("message content ", content)

    const newMessage = {
      id: this.state.messages.length++,
      type:'message',
      username: this.state.username,
      content: content
    }

    this.socket.send (JSON.stringify(newMessage));


   }

  handleName = (content) => {
    console.log("username content ", content)

      const newMessage = {
        id: this.state.messages.length++,
        type:'system',
        username: this.state.username,
        content: (this.state.username, "changed their name to ", content)
      }
        this.socket.send (JSON.stringify(newMessage))

     this.setState({
     username: content
     })
  }



  render() {

    return (
      <div>
      <Navbar usercount={this.state.usercount} />

       <MessageList messages={this.state.messages}/>

      <Chatbar handleMessage={this.handleMessage} handleName={this.handleName} />
      </div>

    );
  }
}
export default App;

