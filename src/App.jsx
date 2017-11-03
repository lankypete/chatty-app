import React, {Component} from 'react'
import Messages from './Messages.jsx'
import Chatbar from './Chatbar.jsx'
import uuid from 'uuid'
const socketUrl = 'ws://localhost:3001'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: props.data.messages,
      currentUser: props.data.currentUser.name,
      loaded: false
    }
    this.onNewPost = ({content, username}) => {
      const data = JSON.stringify({
        content,
        username,
        type: 'message'
      })
      this.state.socket.send(data)
    }
    this.updateUsrName = ({username, oldUserName}) => {
      const data = JSON.stringify({
        oldUserName,
        username,
        type: 'user-change'
      })
      this.state.socket.send(data)
    }

  }

  componentDidMount() {
    setTimeout( () => {
      const socket = new WebSocket(socketUrl)
      this.setState({
        socket
      })

      const that = this
      socket.addEventListener('message', (msg) => {
        const data = JSON.parse(msg.data)
        data.uuid = uuid()
        if (data.type === 'user-change') {
          data.content = `${data.oldUserName} changed his/her name to ${data.username}`;
        }
        const messages = that.state.messages.concat(data)
        that.setState({
          messages,
          currentUser: data.username
        })
      })

      this.setState({
        loaded: true
      })
    }, 800)

    console.log("componentDidMount <App />");

  }

  render() {
    if (this.state.loaded) {
      return(
          <section id="app-container">
            <nav className="navbar">
              <a href="/" className="navbar-brand">Chatty</a>
            </nav>
            <main className="messages">
              <Messages msgData={ this.state.messages }/>
            </main>
            <Chatbar onNewPost={ this.onNewPost } username={ this.state.currentUser } updateUsrName={ this.updateUsrName }/>
          </section>
        )
    } else {
      return (<section id="loading">Loading son</section>)
    }
  }

}
export default App

