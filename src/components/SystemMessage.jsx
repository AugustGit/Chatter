import React, {Component} from 'react';

const SystemMessage = (props) => {

 const previousUsername = props.username
 const newUsername = `${props.content}`

  return (
    <div className="message system">
   {previousUsername}: changed their name to...{newUsername}

    </div>
    )
}

export default SystemMessage;

