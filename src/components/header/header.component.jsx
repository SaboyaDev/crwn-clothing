import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

const Header = () => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link to='/' className='option'>
					Home
				</Link>
				<Link to='/shop' className='option'>
					Shop
				</Link>
				<Link to='/contact' className='option'>
					Contact
				</Link>
				<Link to='/sign_in' className='option'>
					Sign In
				</Link>
				<Link to='/cart' className='option'>
					cart
				</Link>
			</div>
		</div>
	)
}

export default Header
