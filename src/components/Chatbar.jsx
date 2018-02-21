import React, {Component} from 'react';

class Chatbar extends Component {

  onKeyPress = (ev) => {
    console.log("enter key press")
    if (ev.key === "Enter") {
       console.log(ev.target.value)
      this.props.handleMessage(ev.target.value)
      ev.target.value = ""
    }
  }

// onKeyPress(event) {
//   this.setState({
//     content: event.target.innerText
//   });
// }

  render() {
    return (

        <footer className="chatbar">

          <input className="chatbar-username" placeholder="Your Name (Optional)" />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER"
          onKeyPress={this.onKeyPress}/>

        </footer>

    );
  }
}

export default Chatbar;

