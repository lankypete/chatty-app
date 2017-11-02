// Application entrypoint.

// Load up the application styles
import "../styles/application.scss"

import fakedata from "../db/fakedata"
// Render the top-level React component
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

ReactDOM.render(<App data={fakedata}/>, document.getElementById('react-root'))
