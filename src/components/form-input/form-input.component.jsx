import './form-input.styles.scss'

const FormInput = ({ handleInput, label, ...otherInputProps }) => {
	const { value } = otherInputProps
	return (
		<div className='group'>
			<input
				className='form-input'
				onChange={handleInput}
				{...otherInputProps}
			/>
			{label ? (
				<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
					{label}
				</label>
			) : null}
		</div>
	)
}

export default FormInput
