import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import { AppHeader } from './components/layout'

const App = () => (
	<Fragment>
		<AppHeader />
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	</Fragment>
)
export default App;
