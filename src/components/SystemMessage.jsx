import React, {Component} from 'react';

const SystemMessage = (props) => {
console.log()
  const previousUsername = (
    props.username
    //`${props.username}`
    )

 const newUsername = ( `${props.content}`)//: props.content)
  return (
    <div className="message system">
   {previousUsername}: changed their name to...{newUsername}

    </div>
    )
      }

export default SystemMessage;

