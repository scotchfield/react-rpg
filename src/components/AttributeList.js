import React from 'react'

class AttributeList extends React.Component {
	render () {
		return (
			<ul>
				{ Object.keys( this.props.data ).map((key) => {
					return <li key={ key }>{ key }: { this.props.data[key] }</li>
				}) }
			</ul>
		)
	}
}

AttributeList.propTypes = { data: React.PropTypes.object.isRequired }

export default AttributeList
