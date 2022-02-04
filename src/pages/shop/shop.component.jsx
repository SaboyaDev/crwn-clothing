import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data'

class ShopPage extends Component {
	constructor() {
		super()

		this.state = {
			collections: SHOP_DATA,
		}
	}

	render() {
		const { collections } = this.state
		return (
			<div className='shope-page'>
				<h1>Shop Page</h1>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		)
	}
}

export default ShopPage
