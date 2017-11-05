import React, {Component} from 'react'
const imgRegEx = /(https?:\/\/.*\.(?:png|jpg|gif))/i


// do you always extend component?
class Chatbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      usrNameValue: '',
      chatBarClassName: 'disabled-state',
      sendMsgDisabled: true,
    }
  }

  onContentIn = (event) => {
    this.setState({
      content: event.target.value
    })

    if(event.target.value) {
      this.setState({
        sendMsgDisabled: false,
        chatBarClassName: ''
      })
    } else {
      this.setState({
        sendMsgDisabled: true,
        chatBarClassName: 'disabled-state'
      })
    }
  }

  updateUsr = (event) => {
    if (event.key === 'Enter') {
      this.props.updateUsrName({
        username: event.target.value,
        oldUserName: this.props.username
      })
      this.setState({ usrNameValue: '' })
    }

  }

  updateUsrValue = (event) => {
    this.setState({ usrNameValue: event.target.value })
  }

  onKeyPress = (event) => {
    if (event.key === "Enter" && !this.state.sendMsgDisabled) {

      let message = this.state.content

      let imgUrl = this.state.content.match(imgRegEx)
      if (imgUrl) {
        imgUrl = imgUrl[0]
        message = message.replace(imgRegEx, ' ').trim()
      }

      const newMessage = {
        username: (this.props.username || 'anon'),
        content: message,
        imgUrl
      }

      this.props.onNewPost(newMessage)

      //dont do this
      this.setState({
        content: ''
      })
    }
  }


  render() {
    return(
        <footer className="chatbar">
          <div className="chatbar-wrapper">
            <input onKeyPress={ this.updateUsr } onChange={ this.updateUsrValue } value={ this.state.usrNameValue } className="chatbar-username" placeholder={ this.props.username } />
            <input onChange={ this.onContentIn } onKeyPress={ this.onKeyPress } value={ this.state.content } className={ `chatbar-message ${ this.state.chatBarClassName }` } placeholder="Type a message and hit ENTER"/>
          </div>
        </footer>
      )
  }

}

export default Chatbar