import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

import Character from './components/character'
import Dungeon from './components/dungeon'

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


render((
	<Router history={browserHistory}>
		<Route path={App.path} component={App}>
			<Route path={Character.path} component={Character} />
			<Route path={Dungeon.path} component={Dungeon} />
		</Route>
	</Router>
), document.getElementById('content'))
