import { useContext, useState } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'

export default function FibonacciNumber() {
  const [number, setNumber] = useState(0)
  const { name, socket, uid } = useContext(RoomsUidContext)

  const selectScore = (e) => {
    setNumber(e.target.value)
    const data = { roomUid: uid, userName: name, value: e.target.value }
    socket.emit('sendScore', { data: data })
  }

  const isMyOwnJudgement = (seletedNumber) => {
    if (seletedNumber === Number(number)) {
      return 'btn-lg my-auto'
    } else {
      return 'my-5'
    }
  }
  return (
    <>
      <div className='flex gap-2 ml-auto mr-10'>
        {[1, 2, 3, 5, 8, 13, 21, 42].map((num, i) => (
          <label
            htmlFor={num}
            className={`btn btn-primary ${isMyOwnJudgement(num)}`}
            key={i}
            onChange={(e) => selectScore(e)}
          >
            {num}
            <input type='radio' name='selectNumber' value={num} id={num} className='hidden' />
          </label>
        ))}
      </div>
    </>
  )
}
