import { FC, useRef, useState } from 'react'
import './lightbox.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Navigation, Thumbs } from 'swiper/modules'
import IconClose from '@/components/icons/IconClose'
import IconPrev from '@/components/icons/IconPrev'
import IconNext from '@/components/icons/IconNext'

interface LightboxProps {
  images: { full: string; thumb: string }[]
  currentIndex: number
  onClose: () => void
}

const Lightbox: FC<LightboxProps> = ({ images, currentIndex, onClose }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div className="lightbox">
      <div className="lightbox__overlay" onClick={onClose}></div>
      <div className="lightbox__content">
        <button className="lightbox__close" onClick={onClose}>
          <IconClose />
        </button>
        <div className='lightbox__slider-main'>
          <div className="lightbox__navigation">
            <button ref={prevRef} className="lightbox__prev">
              <IconPrev />
            </button>
            <button ref={nextRef} className="lightbox__next">
              <IconNext />
            </button>
          </div>
          <Swiper
            className="lightbox__swiper"
            initialSlide={currentIndex}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }
              swiper.navigation.init()
              swiper.navigation.update()
            }}
          >
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img src={image.full} alt={`Thumbnail ${idx + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={32}
          slidesPerView={4}
          initialSlide={currentIndex}
          navigation
          modules={[Navigation, Thumbs]}
          className="lightbox__thumbs"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className='lightbox__thumbs-item'>
                <img src={image.thumb} alt={`Thumb ${idx + 1}`}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Lightbox
