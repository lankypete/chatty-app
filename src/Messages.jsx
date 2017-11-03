import React, {Component} from 'react'

class Messages extends Component {

  render() {
    console.log(this.props.msgData)
    const msgs = this.props.msgData.map( (msg) => {
      if (msg.type === 'message') {
        return (
            <div key={msg.uuid} className="message">
              <span className="message-username">{ msg.username }</span>
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