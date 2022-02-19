import { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-buttons/custom-button/custom-button.component'
import GoogleButton from '../custom-buttons/google-button/google-button.component'
import './sign-in.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
		}
	}
	// This Sets State dynamically
	handleInput = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({ email: '', password: '' })
	}

	sayHello = () => {
		console.log('clicked')
	}

	render() {
		const { email, password } = this.state
		return (
			<div className='sign-in'>
				<div className='title'>
					<h2>I already have an account</h2>
					<span>Sign in with your email and password</span>
				</div>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={email}
						handleInput={this.handleInput}
						required
						label='email'
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						handleInput={this.handleInput}
						required
						label='password'
					/>
				</form>
				<div className='buttons'>
					<CustomButton onClick={this.sayHello} type='submit'>
						Sign In
					</CustomButton>
					<GoogleButton onClick={signInWithGoogle} />
					{/* <GoogleButton onClick={signInWithGoogle} isGoogleSignIn /> */}
				</div>
			</div>
		)
	}
}

export default SignIn
