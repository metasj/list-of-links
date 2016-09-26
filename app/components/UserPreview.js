import React, { PropTypes } from 'react';
import { Link } from 'react-router';

let styles;

export const UserPreview = React.createClass({
	propTypes: {
		user: PropTypes.object,
	},

	render: function() {
		const user = this.props.user || {};
		const lastRead = user.Follow && user.Follow.lastRead;
		const newLinkCount = user.links.reduce((previousVal, current) => {
			if (current.createdAt > lastRead) {
				return previousVal + 1;	
			}
			return previousVal;
		}, 0);

		return (
			<div style={styles.container}>
				<Link to={'/' + user.username} style={styles.link}>
					<img style={styles.image} src={user.image} alt={'user'} />
					<div style={styles.name}>{user.name}</div>
					{!!newLinkCount && 
						<div style={styles.count}>{newLinkCount}</div>
					}
				</Link>
			</div>
		);
	}

});

export default UserPreview;

styles = {
	container: {
		position: 'relative',
		display: 'inline-block',
		// margin: '0em .5em .5em 0em',
		// flex: '33%',
		width: 'calc(150px + 2em)',
		margin: '1em 0em',
	},
	link: {
		textDecoration: 'none',
	},
	image: {
		width: '150px',
		display: 'block',
		margin: '0 auto',
	},
	name: {
		// position: 'absolute',
		width: 'calc(100% - 1em)',
		padding: '0.25em 0.5em 0em 0.5em',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		// backgroundColor: 'rgba(0,0,0,0.6)',
		// bottom: '0',
		// left: '0',
		// color: 'white',
		textAlign: 'center',
		color: '#555',
	},
	count: {
		position: 'absolute',
		backgroundColor: 'black',
		color: 'white',
		padding: '.25em .5em',
		borderRadius: '10em',
		lineHeight: '1em',
		fontSize: '0.85em',
		top: '-0.25em',
		left: '150px',
		boxShadow: '0px 0px 20px white',
	},
};
