import { useContext, useState, useEffect } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'
import socket from 'lib/socket'
import { useRouter } from 'next/router'
import { FC } from 'react'

type Props = {
  isInProgress: boolean
  name: string
}

const FibonacciNumber: FC<Props> = ({ isInProgress, name }) => {
  const router = useRouter()
  const { uid } = router.query

  const [number, setNumber] = useState(0)

  // anyは後で修正
  const selectScore = (e: any) => {
    setNumber(e.target.value)
    const data = { roomUid: uid, userName: name, value: e.target.value }
    socket.emit('sendScore', data)
  }

  const isMyOwnJudgement = (seletedNumber: number) => {
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
            htmlFor={num.toString()}
            className={`btn btn-primary ${isMyOwnJudgement(num)}`}
            key={i}
            onClick={(e) => selectScore(e)}
          >
            {num}
            <input type='radio' name='selectNumber' value={num} id={num.toString()} className='hidden' />
          </label>
        ))}
      </div>
    </>
  )
}

export default FibonacciNumber
