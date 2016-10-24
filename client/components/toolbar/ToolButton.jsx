import React, {PropTypes} from 'react';
import ReactTooltip from 'react-tooltip';

/**
 * Toolbar allows users to perform actions (undo, share, change color) on the
 * main whiteboard.
 *
 * @class Button
 * @extends React.Component
 */
export default class ToolButton extends React.Component {

	render(){
		return (
			<div 
				data-tip={this.props.text}
				data-class="no-1030"
				className={this.props.className || 'button'} 
				onClick={this.props.handleClick}
				style = {this.props.style || null}
			>
				<span>{this.props.text}</span>
			</div>
		)

	}
}

ToolButton.PropTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	handleClick: PropTypes.func,
	stryle: PropTypes.object
}