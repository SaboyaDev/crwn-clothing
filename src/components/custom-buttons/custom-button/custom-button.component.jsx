import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => {
	// console.log(otherProps)
	return (
		<button className='button' {...otherProps}>
			{children}
		</button>
	)
}

export default CustomButton
