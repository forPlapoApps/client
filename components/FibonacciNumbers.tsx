import { useEffect, useState } from 'react'
import socket from 'lib/socket'

const FibonacciNumbers = ({ uid, isInProgress }) => {
  const numbers = [1, 2, 3, 5, 8, 13, 21, 42]
  const name = localStorage.getItem('userName')
  const [number, setNumber] = useState(0)

  const selectScore = (value) => {
    setNumber(value)
    const data = { roomUid: uid, userName: name, value: Number(value) }
    console.log(data)
    socket.emit('sendScore', { data: data })
  }

  const isMyOwnJudgement = (seletedNumber) => {
    if (seletedNumber === Number(number)) {
      return 'btn-lg my-auto'
    } else {
      return 'my-5'
    }
  }

  useEffect(() => {
    setNumber(0)
  }, [isInProgress])

  return (
    <div className='flex gap-2 ml-auto mr-10'>
      {numbers.map((num, i) => (
        <label
          htmlFor={num.toString()}
          className={`btn btn-primary ${isMyOwnJudgement(num)}`}
          key={i}
        >
          {num}
          <input
            type='radio'
            name='selectNumber'
            value={num}
            id={`${num}`}
            className='hidden'
            onClick={(e) => selectScore((e.target as HTMLInputElement).value)}
          />
        </label>
      ))}
    </div>
  )
}
export default FibonacciNumbers
