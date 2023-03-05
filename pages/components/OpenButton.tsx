import socket from 'lib/socket'
import { useRouter } from 'next/router'
import { FC } from 'react'

type Props = {
  isInProgress: boolean
  setIsInProgress: any //後で修正
  resultAgreement: number | string //なぜかstringになっている。小数だから？
  resultAverage: number
}

const OpenButton: FC<Props> = ({
  isInProgress,
  setIsInProgress,
  resultAgreement,
  resultAverage,
}) => {
  const router = useRouter()
  const { uid } = router.query

  const openAllScore = () => {
    setIsInProgress(false)
    socket.emit('openScoreRequest', { roomUid: uid })
  }

  const resetAllScore = () => {
    setIsInProgress(true)
    socket.emit('resetScoreRequest', { roomUid: uid })
  }

  return (
    <>
      <div className='mx-auto'>
        {isInProgress ? (
          <button className='btn btn-primary' onClick={openAllScore}>
            Open
          </button>
        ) : (
          <div className='flex gap-8'>
            <p className='text-2xl my-auto font-bold'>Ave: {resultAverage}</p>
            <p className='text-2xl my-auto font-bold'>Agreement: {resultAgreement}</p>
            <button className='btn' onClick={resetAllScore}>
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default OpenButton
