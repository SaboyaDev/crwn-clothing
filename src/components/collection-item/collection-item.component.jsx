import './collection-item.styles.scss'

const CollectionItem = ({ name, imageUrl, price }) => {
	return (
		<div className='collection-item'>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className='image'
			/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{`$${price}`}</span>
			</div>
		</div>
	)
}

export default CollectionItem
