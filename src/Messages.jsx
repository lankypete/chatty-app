import React, {Component} from 'react'

class Messages extends Component {

  render() {
    const msgs = this.props.msgData.map( (msg, index) => {
      return (
          <div key={msg.uuid} className="message">
            <span className="message-username">{ msg.username }</span>
            <span className="message-content">{ msg.content }</span>
          </div>
        )
    })

    return (
        <section id="message">{ msgs }</section>
      )

  }

}

export default Messages