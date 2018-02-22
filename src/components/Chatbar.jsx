import React, {Component} from 'react';

class Chatbar extends Component {

  //Username change
  onUserKeyPress = (ev) => {

    if (ev.key === "Enter") {
       if(ev.target.value.trim() === "" ){
        console.log("you can not have an empty feild")
        event.preventDefault()
       } else {
        this.props.handleName(ev.target.value)
       ev.target.value = ""
       }
    }
  }
  //New Message
  onKeyPress = (ev) => {

    if (ev.key === "Enter") {

       if(ev.target.value.trim() === "" ){
        console.log("you can not have an empty feild")
        event.preventDefault()
       } else {
        this.props.handleMessage(ev.target.value)
         ev.target.value = ""
       }
    }
  }

  render() {
    return (

        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={this.onUserKeyPress}/>
          <input className="chatbar-message" placeholder="Type a message and hit ENTER"
          onKeyPress={this.onKeyPress}/>
        </footer>

    );
  }
}

export default Chatbar;

