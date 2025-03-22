import { FC, useState } from 'react'
import './header.scss'
import logo from '@/images/logo.svg'
import avatar from '@/images/avatar.png'
import Navigation from '@/components/Navigation/Navigation'

import IconMenu from '@/components/icons/IconMenu'
import Cart from '@/components/Cart/Cart'

const Header:FC = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  function toggleMenu() {
    setIsShowMenu((prev) => !prev)
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrap'>

          <button 
            className='header__menu' 
            type='button' 
            aria-label='menu button'
            onClick={toggleMenu}
            
          >
            <IconMenu />
          </button>

          <div className='header__logo'>
            <img src={logo} alt="logo" />
          </div>
          
          <Navigation activeMenu={isShowMenu} handleToggleMenu={toggleMenu}/>

          <div className='header__cart'>
            <Cart/>

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
