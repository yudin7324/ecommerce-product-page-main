import { FC } from 'react'
import { useState } from 'react'
import './gallery.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
// import IconPrev from '@/components/icons/IconPrev';
// import IconNext from '@/components/icons/IconNext';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


interface Image {
  full: string;
  thumb: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery:FC<GalleryProps> = ({ images }) => {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(images);
  // function handleClickNext() {
  //   setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  // }

  // function handleClickPrev() {
  //   setSelectedIndex((prevIndex) => 
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // }

  return (
    <div className="gallery">
      {/* <div className="gallery__image">
        <img src={images[selectedIndex].full} alt="selected image" />
      </div> */}
      {/* <div className="gallery__thumbnails">
        {images.map((img, index) => (
          <div 
            className={`gallery__thumbnails-item ${selectedIndex === index && "active"}`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={img.thumb} alt={`Thumbnail ${index + 1}`}/>
          </div>
        ))}
      </div>
      <div className='gallery__navigation'>
        <div className='gallery__navigation-btn' onClick={handleClickPrev}>
          <IconPrev />
        </div>
        <div className='gallery__navigation-btn' onClick={handleClickNext}>
          <IconNext />
        </div>
      </div> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="gallery__slider-main"
      >
        <SwiperSlide>
          <div className='gallery__image'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery__slider-thumbs"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery
