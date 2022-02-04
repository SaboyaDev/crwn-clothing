import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h1>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, name, price }) => (
						<div key={id}>{`${name} $${price}`}</div>
					))}
			</div>
		</div>
	)
}

export default CollectionPreview
