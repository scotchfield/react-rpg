import React from 'react'

import AttributeList from './AttributeList'
import GearList from './GearList'

class Character extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="Character">
				<h2>{ this.props.name }</h2>
				<h3>Level { this.props.level }</h3>
				<h4>Attributes</h4>
				<AttributeList data={ this.props.attributes } />
				<h4>Gear</h4>
				<GearList data={ this.props.gear } />
			</div>
		)
	}
}

Character.title = 'Character'
Character.path = '/character'

Character.defaultProps = {
	name: 'Name',
	level: 0,
	attributes: { strength: 1, dexterity: 1, intelligence: 1 },
	gear: [ { name: 'Old Clothes', modifiers: { strength: 0 } } ]
};

export default Character
