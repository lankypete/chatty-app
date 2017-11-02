import React, {Component} from 'react'

// do you always extend component?
class Chatbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      username: ''
    }
    this.onContent = (event) => {
      this.setState({
        //how to find the event information
        content: event.target.value
      })
    }
    this.onUserName = (event) => {
      this.setState({
        username: event.target.value
      })
    }
  }


  // define methods here.. or inside the constructor?
  postIfEnterKey(event) {
    if (event.key === "Enter") {

      const {content, username} = this.state;
      const newMessage = {content, username};

      // const newMessage = this.state;

      this.props.onNewPost(newMessage)
      //dont do this
      this.state.content = ''
      this.state.username = ''
    }
  }

  render() {
    return(
        <footer className="chatbar">
          <input onChange={ this.onUserName } value={ this.state.username } className="chatbar-username" placeholder="Your Name (Optional)" />
          <input onChange={ this.onContent } value={ this.state.content } onKeyPress={ this.postIfEnterKey.bind(this) } className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      )
  }

}

export default Chatbar