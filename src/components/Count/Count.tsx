import { FC, useState } from 'react'
import './count.scss'
import IconMinus from '@/components/icons/IconMinus'
import IconPlus from '@/components/icons/IconPlus'

const Count: FC = () => {
  const [count, setCount] = useState<number>(0);

  function handelIncrease() {
    setCount((prev) => prev + 1)
  }

  function handleDecrease() {
    if(count > 0) {
      setCount((prev) => prev - 1)
    }
  }

  return (
    <div className='count'>
      <button 
        className='count__btn' 
        type='button' 
        aria-label='decrease button'
        onClick={handleDecrease}
      >
        <IconMinus />
      </button>
      <div className='count__num'>{count}</div>
      <button 
        className='count__btn' 
        type='button' 
        aria-label='increase button'
        onClick={handelIncrease}
      >
        <IconPlus />
      </button>
    </div>
  )
}

export default Count
