import React from 'react';
export default class Header extends React.Component{

	componentWillMount(){
		console.log("COMPONENT WILL MOUNT!");
	}

	componentDidMount(){
		console.log("COMPONENT DID MOUNT!");
	}

	shouldComponentUpdate(){
		console.log("SHOULD COMPONENT UPDATE!");
	}

	componentDidUpdate(){
		console.log("COMPONENT DID UPDATE!");
	}

	render(){
		console.log("COMPONENT RENDERS!");
		return( <div>Child component</div> );
	}
};