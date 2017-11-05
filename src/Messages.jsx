import React, {Component} from 'react'

class Messages extends Component {

  imgTag = (imgLink) => {
    if (!imgLink) {
      return
    }
    return <div className="message-img"><img src={imgLink} alt="An image in the chat"/></div>
  }

  render() {
    const msgs = this.props.msgData.map( (msg) => {
      if (msg.type === 'message') {
        return (
            <div key={msg.uuid} className="message">
              <span className={`message-username ${msg.color}`}>{ msg.username }</span>
              <span className="message-content">
                { msg.content }
                { this.imgTag(msg.imgUrl) }
              </span>
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