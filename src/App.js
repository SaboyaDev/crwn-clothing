import { Component } from 'react'
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import { auth } from './firebase/firebase.utils'
import { onAuthStateChanged } from 'firebase/auth'

import './App.css'

class App extends Component {
	constructor() {
		super()

		this.state = {
			currentUser: null,
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
			if (user) {
				this.setState({ currentUser: user })
				console.log(`${user.email} ---> Signed In`)
			} else {
				this.setState({ currentUser: null })
				console.log('Signed Out')
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
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
}

export default App
