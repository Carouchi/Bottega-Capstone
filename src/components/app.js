import React, { Component } from "react";
import SignIn from "./auth/signin";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<SignIn />
			</div>
		);
	}
}
