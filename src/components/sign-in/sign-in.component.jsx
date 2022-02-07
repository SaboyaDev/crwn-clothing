import { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {
	signInWithGoogle,
	signOutWithGoogle,
} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

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
		// example:  { sth: else }
		// same as -->  { ["sth"]: else }

		// let id = "sth";
		// { [id]: else }
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({ email: '', password: '' })
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
					{/* <CustomButton type='submit'>Sign Out</CustomButton> */}
				</form>
				<CustomButton onClick={signInWithGoogle}>
					Sign In With Google
				</CustomButton>
				<CustomButton onClick={signOutWithGoogle}>Sign Out</CustomButton>
			</div>
		)
	}
}

export default SignIn
