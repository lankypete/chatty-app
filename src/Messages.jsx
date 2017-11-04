import React, {Component} from 'react'

class Messages extends Component {

  render() {
    const msgs = this.props.msgData.map( (msg) => {
      if (msg.type === 'message') {
        console.log(msg.color)
        return (
            <div key={msg.uuid} className="message">
              <span className={`message-username ${msg.color}`}>{ msg.username }</span>
              <span className="message-content">{ msg.content }</span>
            </div>
          )
      } else if (msg.type === 'user-change' ) {
        return (
            <div key={msg.uuid} className="message system">
              { msg.content }
            </div>
          )
      }
    })

    return (
        <section id="message">{ msgs }</section>
      )

  }

}

export default Messages