import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import App from './components/App.js'
import Hello from './components/Hello'

// https://tylermcginnis.com/react-router-cannot-get-url-refresh/ for react router help and understanding

class Goodbye extends React.Component {
	render() {
		return <div>goodbye</div>
	}
}

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/goodbye" component={Goodbye} />
			<Route path="/hi" component={Hello} />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
)
