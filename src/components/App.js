import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/App.css'

class App extends Component {
	render() {
		return (
			<div>
				Welcome!
				<Link to="/goodbye">About</Link>
			</div>
		)
	}
}

export default App
