import { FC } from 'react'
import './count.scss'
import IconMinus from '@/components/icons/IconMinus'
import IconPlus from '@/components/icons/IconPlus'

interface CountProps {
  count: number
  setCount: (value: number) => void
}

const Count: FC<CountProps> = ({ count, setCount }) => {
  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    if (count > 1) {
      setCount(count - 1)
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
        onClick={handleIncrease}
      >
        <IconPlus />
      </button>
    </div>
  )
}

export default Count
