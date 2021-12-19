import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
import { Router, Switch, Route } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";
import history from "./history";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import Posts from "./components/posts";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" exact component={Signin} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/posts" exact component={Posts} />
				</Switch>
			</Router>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
