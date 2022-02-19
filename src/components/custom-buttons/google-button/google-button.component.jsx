import './google-button.styles.scss'

const GoogleButton = ({ ...otherProps }) => {
	return (
		<div className='google-btn' {...otherProps}>
			<div className='google-icon-wrapper'>
				<img
					className='google-icon'
					src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
					alt="Google's Logo"
				/>
			</div>
			<p className='btn-text'>
				<b>Sign in with google</b>
			</p>
		</div>
	)
}

export default GoogleButton
