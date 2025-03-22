import { FC, useState, useEffect, useRef } from 'react'
import './cart.scss'
import IconCart from '@/components/icons/IconCart'
import IconDelete from '@/components/icons/IconDelete'

interface CartItem {
  id: string 
  title: string
  price: string
  totalPrice: string
  image: string
  quantity: number
}

const Cart: FC = () => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isShowCart, setIsShowCart] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const cartRef = useRef<HTMLDivElement>(null)

  function toggleCart() {
    setIsShowCart(prev => !prev)
  }

  function handleClickOutside(event: MouseEvent) {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsShowCart(false)
    }
  }

  function updateCart() {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(storedCart)
  }

  function removeItemFromCart(itemId: string) {
    const updatedCart = cart.filter(item => item.id !== itemId)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  useEffect(() => {
    updateCart()

    window.addEventListener('cartUpdated', updateCart)

    return () => {
      window.removeEventListener('cartUpdated', updateCart)
    }
  }, [])

  useEffect(() => {
    const countItem = cart.reduce((acc, curr) => acc + curr.quantity, 0)
    setCount(countItem)
  }, [cart])

  useEffect(() => {
    if (isShowCart) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isShowCart])

  return (
    <div className='cart' ref={cartRef}>
      <button 
        className='cart__btn' 
        type='button' 
        onClick={toggleCart}
        aria-label='cart button'
      >
        <IconCart />
      </button>
      {count > 0 && <div className='cart__count'>{count}</div>}
      <div className={`cart__popup ${isShowCart ? "active" : ""}`}>
        <div className='cart__popup-title'>Cart</div>
        <div className='cart__popup-content'>
          {cart.length > 0 ? (
            <div className='cart__list'>
              <ul className='cart__items'>
                {cart.map((item) => (
                  <li className='cart__item' key={item.id}>
                    <figure className='cart__item-img'>
                      <img src={item.image} alt={item.title} />
                    </figure>
                    <div className='cart__item-content'>
                      <div className='cart__item-title'>{item.title}</div>
                      <div className='cart__item-price'>
                        <span className='cart__item-curr'>{item.price} x {item.quantity}</span>
                        <span className='cart__item-summ'>{item.totalPrice}</span>
                      </div>
                    </div>
                    <button
                      className='cart__item-delete' 
                      type='button'
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      <IconDelete />
                    </button>
                  </li>
                ))}
              </ul>
              <button className='cart__btn btn' type='button'>
                Checkout
              </button>
            </div>
          ) : (
            <span className='cart__popup-empty'>Your cart is empty.</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
