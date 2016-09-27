import React from 'react';

/**
 * Board Navigation. Since Whiteboard app uses multiple boards, this component allows users
 * to toggle between them. This is done by clicking on a thumbnail image. User can add new board
 * until the maximum number is reached.
 *
 * @class Nav
 * @extends React.Component
 */
export default class Nav extends React.Component {
	render(){
		return (
			<nav className="nav">
				<ol className="nav__list">
					<li></li>
					<li></li>
				</ol>
			</nav>
		)
	}
}