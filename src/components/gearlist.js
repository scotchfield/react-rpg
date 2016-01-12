import React from 'react'

class GearList extends React.Component {
	render () {
		console.log( this.props.data );
		return (
			<ul>
				<li>GearList</li>
			</ul>
		)
	}
}

export default GearList