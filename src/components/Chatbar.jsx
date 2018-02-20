import React, {Component} from 'react';

class Chatbar extends Component {

  onKeyPress = (ev) => {
    if (ev.key === "Enter") {
      this.props.handleMessage(ev.target.value)
      ev.target.value = ""
    }
  }

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

