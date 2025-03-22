import { FC } from 'react'
import './card.scss'
import Count from '@/components/Count/Count'
import IconCart from '@/components/icons/IconCart'
import Gallery from '@/components/Gallery/Gallery'

const images = [
  { full: "src/assets/image-product-1.jpg", thumb: "src/assets/image-product-1-thumbnail.jpg" },
  { full: "src/assets/image-product-2.jpg", thumb: "src/assets/image-product-2-thumbnail.jpg" },
  { full: "src/assets/image-product-3.jpg", thumb: "src/assets/image-product-3-thumbnail.jpg" },
  { full: "src/assets/image-product-4.jpg", thumb: "src/assets/image-product-4-thumbnail.jpg" },
];

const Card: FC = () => {
  return (
    <section className='card'>
      <div className='card__wrap'>
        <Gallery images={images} />
        <div className='card__content'>
          <h2 className='card__subtitle'>Sneaker Company</h2>
          <h1 className='card__title text-preset-1'>Fall Limited Edition Sneakers</h1>
          <p className='card__text text-preset-3'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

          <div className='card__price'>
            <div className='card__price-new'>
              <span className='text-preset-2'>$125.00</span>
              <span className='card__price-sale'>50%</span>
            </div>
            <div className='card__price-old'>$250.00</div>
          </div>

          <div className='card__btns'>
            <Count />

            <button 
              className='card__btn btn'
              type='button'
              aria-label='add to cart button'
            >
              <IconCart/>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
