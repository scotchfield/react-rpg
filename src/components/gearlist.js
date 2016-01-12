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

GearList.propTypes = { data: React.PropTypes.array.isRequired }

export default GearList
