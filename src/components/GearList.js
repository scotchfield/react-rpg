import React from 'react'

import AttributeList from './attributelist'

class GearList extends React.Component {
	getModifiers ( modifiers ) {
		return Object.keys( modifiers ).map((modifier) => {
			return modifier + ': ' + modifiers[modifier]
		}).join()
	}
	render () {
		return (
			<ul>
				{ this.props.data.map((key) => {
					return (
						<li key={ key.name }>
							{ key.name }
							<br />
							{ this.getModifiers( key.modifiers ) }
						</li>
					)
				}) }
			</ul>
		)
	}
}

GearList.propTypes = { data: React.PropTypes.array.isRequired }

export default GearList
