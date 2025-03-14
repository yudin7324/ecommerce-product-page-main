import { FC } from 'react'
import './header.scss'
import logo from '@/assets/logo.svg'
import Navigation from '@/components/Navigation/Navigation'

const Header:FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrap'>

          <div className='header__logo'>
            <img src={logo} alt="logo" />
          </div>
          
          <Navigation />

        </div>
      </div>
    </header>
  )
}

export default Header
