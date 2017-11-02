import React, {Component} from 'react'
import Messages from './Messages.jsx'
import Chatbar from './Chatbar.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: props.data.messages,
      currentUser: props.data.currentUser,
      loaded: false
    }
    this.onNewPost = ({content, username}) => {
      const messages = this.state.messages.concat({content, username})
      this.setState({
        messages
      })

    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        loaded: true
      })
    }, 800)

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);

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
              <div className="message system">
                Anonymous1 changed their name to nomnom.
              </div>
            </main>
            <Chatbar onNewPost={ this.onNewPost }/>
          </section>
        )
    } else {
      return (<section id="loading">Loading son</section>)
    }
  }

}
export default App

