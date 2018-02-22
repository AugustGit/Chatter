import React, {Component} from 'react';

class Chatbar extends Component {

  onUserKeyPress = (ev) => {
    console.log("enter key press for username")
    if (ev.key === "Enter") {
       console.log("onUserKeyPress ", ev.target.value)
       if(ev.target.value.trim() === "" ){
        console.log("you can not have an empty feild")
        event.preventDefault()
       } else {
        console.log("onUserKeyPress ", ev.target.value)
      this.props.handleName(ev.target.value)
      ev.target.value = ""
    }
   }
  }
  onKeyPress = (ev) => {
    console.log("enter key press")
    if (ev.key === "Enter") {
       console.log("onKeyPress ", ev.target.value)
       if(ev.target.value.trim() === "" ){
        console.log("you can not have an empty feild")
        event.preventDefault()
       } else {
        console.log("onKeyPress ", ev.target.value)
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

