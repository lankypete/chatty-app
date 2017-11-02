import React, {Component} from 'react'

// do you always extend component?
class Chatbar extends Component {

  constructor(props) {
    super(props)
    this.disabledChatStyle = {
      opacity: '.6',
      background: '#ccc'
    }
    this.enabledChatStyle = {
      opacity: '1',
      background: 'white'
    }
    this.state = {
      content: '',
      username: '',
      sendMsgDisabled: true,
      chatStyle: this.disabledChatStyle
    }
    this.onUserName = (event) => {
      this.setState({
        username: event.target.value
      })
    }
  }

  onContentIn = (event) => {
    this.setState({
      content: event.target.value
    })

    if(event.target.value) {
      this.setState({
        sendMsgDisabled: false,
        chatStyle: this.enabledChatStyle
      })
    } else {
      this.setState({
        sendMsgDisabled: true,
        chatStyle: this.disabledChatStyle
      })
    }

  }

  onKeyPress = (event) => {
    if (event.key === "Enter" && !this.state.sendMsgDisabled) {

      const newMessage = {
        username: (this.state.username || 'anon'),
        content: this.state.content
      }

      this.props.onNewPost(newMessage)

      //dont do this
      this.setState({
        content: '',
        username: ''
      })
    }
  }


  render() {
    return(
        <footer className="chatbar">
          <input onChange={ this.onUserName } value={ this.state.username } className="chatbar-username" placeholder="Your Name (Optional)" />
          <input onChange={ this.onContentIn } onKeyPress={ this.onKeyPress } value={ this.state.content } className="chatbar-message" placeholder="Type a message and hit ENTER" style={this.state.chatStyle} />
        </footer>
      )
  }

}

export default Chatbar