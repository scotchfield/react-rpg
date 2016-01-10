import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

class App extends React.Component {
	render () {
		return (
			<div className="Container">
				<h1>React RPG</h1>
				<ul>
					<li><Link to={App.path}>Home</Link></li>
					<li><Link to={Character.path}>Character</Link></li>
					<li><Link to={Dungeon.path}>Dungeon</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
};

App.title = 'React RPG'
App.path = '/'

class Character extends React.Component {
	render () {
		return (
			<div className="Character">
				<h2>Character</h2>
			</div>
		)
	}
}

Character.title = 'Character'
Character.path = '/character'

class Dungeon extends React.Component {
	render () {
		return (
			<div className="Dungeon">
				<h2>Dungeon</h2>
			</div>
		)
	}
}

Dungeon.title = 'Dungeon'
Dungeon.path = '/dungeon'



render((
	<Router history={browserHistory}>
		<Route path={App.path} component={App}>
			<Route path={Character.path} component={Character} />
			<Route path={Dungeon.path} component={Dungeon} />
		</Route>
	</Router>
), document.getElementById('content'))
