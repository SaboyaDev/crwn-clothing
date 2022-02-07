import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<button className='login-with-google-btn' {...otherProps}>
			{children}
		</button>
	)
}

export default CustomButton

// className='custom-button'
