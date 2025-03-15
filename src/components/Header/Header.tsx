import { FC } from 'react'
import './header.scss'
import logo from '@/assets/logo.svg'
import avatar from '@/assets/avatar.png'
import Navigation from '@/components/Navigation/Navigation'
import IconCart from '@/components/icons/IconCart'

const Header:FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrap'>

          <div className='header__logo'>
            <img src={logo} alt="logo" />
          </div>
          
          <Navigation />

          <div className='header__cart'>
            <button 
              className='header__cart-btn' 
              type='button' 
              aria-label='cart button'
            >
               <IconCart />
            </button>

            <figure className='header__avatar'>
              <img src={avatar} alt="avatar" />
            </figure>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
