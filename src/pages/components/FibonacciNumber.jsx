import { useContext, useState, useEffect } from 'react'

export default function FibonacciNumber() {
  const [number, setNumber] = useState(0)
  const { name, socket, uid, isInProgress } = useContext(RoomsUidContext)

  const selectScore = (e) => {
    setNumber(e.target.value)
    const data = { roomUid: uid, userName: name, value: e.target.value }
    socket.emit('sendScore', data)
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
    <>
      <div className='flex gap-2 ml-auto mr-10'>
        {[1, 2, 3, 5, 8, 13, 21, 42].map((num, i) => (
          <label
            htmlFor={num}
            className={`btn btn-primary ${isMyOwnJudgement(num)}`}
            key={i}
            onClick={(e) => selectScore(e)}
          >
            {num}
            <input type='radio' name='selectNumber' value={num} id={num} className='hidden' />
          </label>
        ))}
      </div>
    </>
  )
}
