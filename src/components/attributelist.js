import React from 'react'

class AttributeList extends React.Component {
	render () {
		console.log( this.props.data );
		return (
			<ul>
				<li>AttributeList</li>
			</ul>
		)
	}
}

export default AttributeList