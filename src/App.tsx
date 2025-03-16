import '@/styles/main.scss';
import Header from '@/components/Header/Header';
import Card from '@/components/Card/Card';

function App() {

  return (
    <main className='main'>
      <Header />
      <div className='container'>
        <Card />
      </div>
    </main>
  )
}

export default App
