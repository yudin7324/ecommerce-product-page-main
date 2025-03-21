import { FC } from 'react'
import './cart.scss'
import IconCart from '@/components/icons/IconCart'
import IconDelete from '@/components/icons/IconDelete'
import TestImage from '@/assets/image-product-1-thumbnail.jpg'

const Cart: FC = () => {
  return (
    <div className='cart'>
      <button 
        className='header__cart-btn' 
        type='button' 
        aria-label='cart button'
      >
          <IconCart />
      </button>

      <div className='cart__popup'>
        <div className='cart__popup-title'>Cart</div>

        <div className='cart__popup-content'>

          {/* <span className='cart__popup-empty'>Your cart is empty.</span> */}

          <div className='cart__list'>
          <ul className='cart__items'>
            <li className='cart__item'>
              <figure className='cart__item-img'>
                <img src={TestImage} alt="" />
              </figure>
              <div className='cart__item-content'>
                <div className='cart__item-title'>Fall Limited Edition Sneakers</div>
                <div className='cart__item-price'>
                  <span className='cart__item-curr'>$125.00 x 3</span>
                  <span className='cart__item-summ'>$375.00</span>
                </div>
                
              </div>
              <button 
                className='cart__item-delete'
                type='button'
                aria-label='delete cart item button'
              >
                <IconDelete />
              </button>
            </li>
          </ul>
          </div>
       

        </div>
      </div>
    </div>
  )
}

export default Cart
