import { FC } from 'react'
import './navigation.scss'
import IconClose from '@/components/icons/IconClose'

interface NavigationProps {
  activeMenu: boolean;
  handleToggleMenu: () => void;
}

const Navigation:FC<NavigationProps> = ({ activeMenu, handleToggleMenu }) => {

  return (
    <>
      <nav className={`navigation ${activeMenu && 'active'}`}>
        <div className='container'>
     
          <div className='navigation__list'>
            <button 
              className='navigation__close' 
              type='button' 
              aria-label='close menu button'
              onClick={handleToggleMenu}
            >
              <IconClose />
            </button>
            <ul className='navigation__list-wrap'>
              <li className='navigation__item'>
                <a href="#" className='navigation__link'>Collections</a>
              </li>
              <li className='navigation__item'>
                <a href="#" className='navigation__link'>Men</a>
              </li>
              <li className='navigation__item'>
                <a href="#" className='navigation__link'>Women</a>
              </li>
              <li className='navigation__item'>
                <a href="#" className='navigation__link'>About</a>
              </li>
              <li className='navigation__item'>
                <a href="#" className='navigation__link'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div 
          className={`navigation__backdrop ${activeMenu && 'active'}`} 
          onClick={handleToggleMenu}
        ></div>
      </nav>
    </>
  )
}

export default Navigation
