import { FC, useState, useRef, useEffect } from 'react'
import './gallery.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import IconPrev from '@/components/icons/IconPrev'
import IconNext from '@/components/icons/IconNext'
import Lightbox from '@/components/Lightbox/Lightbox'

interface Image {
  full: string
  thumb: string
}

interface GalleryProps {
  images: Image[]
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth > 600)
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 600)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="gallery">
        <div className="gallery__navigation">
          <button ref={prevRef} className="gallery__prev">
            <IconPrev />
          </button>
          <button ref={nextRef} className="gallery__next">
            <IconNext />
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          grabCursor={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="gallery__slider-main"
          loop={true}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
            swiper.navigation.init()
            swiper.navigation.update()
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="gallery__slider-main-image responsive-media"
                onClick={() => setLightboxIndex(index)}
              >
                <img src={image.full} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={32}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="gallery__slider-thumbs"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="gallery__slider-thumbs-item responsive-media">
                <img src={image.thumb} alt={`Thumbnail ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isLargeScreen && lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}

export default Gallery
