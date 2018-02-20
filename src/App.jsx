import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';



class App extends Component {
  render() {

    return (

      <div>
      <Navbar/>
      <Message/>
      <MessageList/>
      <Chatbar/>
       </div>

    );
  }
}
export default App;

