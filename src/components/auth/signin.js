import React, { Component } from "react";

import SignInForm from "./signinForm";
import PageTitle from "../pageTitle";

import { connect } from "react-redux";
import * as actions from "../../actions";

class SignIn extends Component {
	onSubmit = (fields) => {
		console.log("attempting signin");
		this.props.signIn(fields);
		this.props.history.push("/posts");
	};

	render() {
		return (
			<div className="sign-in">
				<PageTitle className="sign-in__page-title" title="Login" />
				<SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
			</div>
		);
	}
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;
