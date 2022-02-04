import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

// We have to history, linkUrl and match
// because of the withRouter component returning a higher order component
//  With access to the the Router methods
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
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

export default withRouter(MenuItem)
