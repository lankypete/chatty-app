import React, {Component} from 'react'

class Chatbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
    this.onContent = (event) => {
      console.log(event.target.innerText)
      this.setState({
        content: event.target.value
      })
    }
  }

  render() {
    return(
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" />
          <input onChange={ this.onContent } value={ this.state.content } className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      )
  }

}

export default Chatbar