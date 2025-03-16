import { FC } from 'react'
import { useState } from 'react'
import './gallery.scss'
import IconPrev from '@/components/icons/IconPrev';
import IconNext from '@/components/icons/IconNext';

interface Image {
  full: string;
  thumb: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery:FC<GalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleClickNext() {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handleClickPrev() {
    setSelectedIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="gallery">
      <div className="gallery__image">
        <img src={images[selectedIndex].full} alt="selected image" />
      </div>
      <div className="gallery__thumbnails">
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
      </div>
    </div>
  );
}

export default Gallery
