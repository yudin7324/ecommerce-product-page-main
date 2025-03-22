import '@/styles/main.scss';
import Header from '@/components/Header/Header';
import Card from '@/components/Card/Card';

const images = [
  { full: "src/assets/image-product-1.jpg", thumb: "src/assets/image-product-1-thumbnail.jpg" },
  { full: "src/assets/image-product-2.jpg", thumb: "src/assets/image-product-2-thumbnail.jpg" },
  { full: "src/assets/image-product-3.jpg", thumb: "src/assets/image-product-3-thumbnail.jpg" },
  { full: "src/assets/image-product-4.jpg", thumb: "src/assets/image-product-4-thumbnail.jpg" },
];

const cardData = {
  id: '1',
  title: 'Fall Limited Edition Sneakers',
  subtitle: 'Sneaker Company',
  text: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '125.00',
  old_price: '250.00',
  sale: '50%',
  images: images,
}

function App() {
  return (
    <main className='main'>
      <Header />
      <div className='container'>
        <Card 
          id={cardData.id}
          title={cardData.title}
          subtitle={cardData.subtitle}
          text={cardData.text}
          price={cardData.price}
          oldPrice={cardData.old_price}
          sale={cardData.sale}
          images={cardData.images}
        />
      </div>
    </main>
  )
}

export default App
