import { FC } from 'react'

type Props = {
  score: number
  isInProgress: boolean
}

const ResultNumber: FC<Props> = ({ score, isInProgress }) => {
  return (
    <>
      {isInProgress ? (
        score === 0 ? (
          <div className='h-60 w-36 rounded-xl bg-primary-content flex'>
            <p className='m-auto text-5xl'>🤔</p>
          </div>
        ) : (
          <div className='h-60 w-36 rounded-xl bg-neutral-content flex'>
            <p className='m-auto text-5xl'>👍</p>
          </div>
        )
      ) : (
        <div className='h-60 w-36 rounded-xl bg-primary flex'>
          <p className='m-auto text-5xl text-white'>{score}</p>
        </div>
      )}
    </>
  )
}

export default ResultNumber
