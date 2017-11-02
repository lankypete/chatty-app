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
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
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
            <Chatbar/>
          </section>
        )
    } else {
      return (<section id="loading">Loading son</section>)
    }
  }

}
export default App

/*
  1.   Copy html layout into App.jsx.
  2.   Convert class and other reserved names to React versions.
  3.   Break html into separate components to create a hierarchy.
  4.   Add state to App.jsx to manage the current posts.
  5.   Pass the posts to the child components as a prop.
  6.   In the posts series component map over the posts array.
  7.   In the posts component use the prop to replace the static content.
  8.   In the header setup the content state.
  9.   Pass the current and maximum character count to the status bar as props.
  10.  In the status bar render the character counter, changing the style when max is reached.
  11.  Setup an event handler to trigger an update to the content on input.
  12.  Pass a function to the header that it can call when a new post is created.
  13.  Setup an event handler to use the function, passed as a prop.
  14.  In the header create the error state and pass it as a prop to the status.
  15.  Show the error text if it is not empty.
  16.  Switch from hard coded posts to json that uses a fetch (ajax) call.
  17.  Save the new post to the database in the App.jsx post handler function.
  18.  Toggle the visibility of the compose window.
*/
