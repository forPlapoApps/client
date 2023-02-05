import { useContext } from 'react'

export default function ResultNumber(props) {
  const { isInProgress } = useContext(RoomsUidContext)
  return (
    <>
      {isInProgress ? (
        props.score === 0 ? (
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
          <p className='m-auto text-5xl text-white'>{ props.score }</p>
        </div>
      )}
    </>
  )
}
