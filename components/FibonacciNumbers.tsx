import { useEffect, useState } from 'react'
import { sendScore } from 'services/plapo/sendScore'
import { isMyOwnJudgement } from 'utils/isMyOwnJudgement'

const FibonacciNumbers = ({ uid, isInProgress }) => {
  const numbers = [1, 2, 3, 5, 8, 13, 21, 42]
  const name = localStorage.getItem('userName')
  const [number, setNumber] = useState<number>(0)

  const selectScore = (value: number) => {
    setNumber(value)
    sendScore(uid, name, value)
  }

  useEffect(() => {
    setNumber(0)
  }, [isInProgress])

  return (
    <div className='flex gap-2 ml-auto mr-10'>
      {numbers.map((num, i) => (
        <label
          htmlFor={num.toString()}
          className={`btn btn-lg ${isMyOwnJudgement(number, num)}`}
          key={i}
        >
          {num}
          <input
            type='radio'
            name='selectNumber'
            value={num}
            id={`${num}`}
            className='hidden'
            onClick={(e) => selectScore(Number((e.target as HTMLInputElement).value))}
          />
        </label>
      ))}
    </div>
  )
}
export default FibonacciNumbers
