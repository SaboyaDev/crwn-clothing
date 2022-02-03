import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className='background-image'
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>{`shop now`.toUpperCase()}</span>
			</div>
		</div>
	)
}
