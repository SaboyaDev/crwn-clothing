import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size }) => {
	console.log(imageUrl)
	return (
		<div
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			className={`${size} menu-item`}
		>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>shop now</span>
			</div>
		</div>
	)
}
