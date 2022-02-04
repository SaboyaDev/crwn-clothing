import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'

import './App.css'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignInSignUp} />
			</Switch>
		</div>
	)
}

export default App
