import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<nav
			className='navbar navbar-expand navbar-dark'
			style={{ backgroundColor: 'var(--super-blue)' }}>
			<NavLink to='/' className='navbar-brand'>
				Super Store
			</NavLink>
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item'>
					<NavLink to='/' exact className='nav-link'>
						Home
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/deals' className='nav-link'>
						Deals
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/cart' className='nav-link'>
						Cart
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Header
