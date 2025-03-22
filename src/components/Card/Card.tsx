import { FC, useState } from 'react'
import './card.scss'
import Count from '@/components/Count/Count'
import IconCart from '@/components/icons/IconCart'
import Gallery from '@/components/Gallery/Gallery'

interface Image {
  full: string
  thumb: string
}

interface CardProps {
  id: string;
  title: string
  subtitle: string
  text: string
  price: string
  oldPrice: string
  sale: string
  images: Image[]
}

interface CartItem {
  id: string;
  title: string
  price: string
  totalPrice: string
  image: string
  quantity: number
}

const Card: FC<CardProps> = ({
  id,
  title,
  subtitle,
  text,
  price,
  oldPrice,
  sale,
  images,
}) => {
  const [count, setCount] = useState<number>(1)

  function formatPrice(value: number): string {
    return `$${value.toFixed(2)}`
  }

  function addToCart() {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingItem = cart.find(item => item.title === title)

    if (existingItem) {
      existingItem.quantity += count
      existingItem.totalPrice = formatPrice(existingItem.quantity * parseFloat(price))
    } else {
      cart.push({
        id,
        title,
        price: formatPrice(parseFloat(price)),
        totalPrice: formatPrice(count * parseFloat(price)),
        image: images[0].thumb,
        quantity: count,
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  return (
    <section className='card'>
      <div className='card__wrap'>
        <Gallery images={images} />
        <div className='card__content'>
          <h2 className='card__subtitle'>{subtitle}</h2>
          <h1 className='card__title text-preset-1'>{title}</h1>
          <p className='card__text text-preset-3'>{text}</p>

          <div className='card__price'>
            <div className='card__price-new'>
              <span className='text-preset-2'>${price}</span>
              <span className='card__price-sale'>{sale}</span>
            </div>
            <div className='card__price-old'>${oldPrice}</div>
          </div>

          <div className='card__btns'>
            <Count count={count} setCount={setCount} />
            <button 
              className='card__btn btn'
              type='button'
              onClick={addToCart}
            >
              <IconCart />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
