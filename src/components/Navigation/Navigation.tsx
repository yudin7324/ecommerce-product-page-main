import { FC } from 'react'
import './navigation.scss'

const Navigation: FC = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
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
    </nav>
  )
}

export default Navigation
