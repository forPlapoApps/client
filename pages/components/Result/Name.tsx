import { FC } from 'react'

type Props = {
  displayName: string
  myName: string
}

// カードの下にある名前
const ResultName: FC<Props> = ({ displayName, myName }) => {
  const isMyName = (value: string) => {
    return value === myName
  }

  return (
    <>
      <div className='flex'>
        <p className={`mx-auto font-bold ${isMyName(displayName) && 'text-accent text-xl'}`}>
          {displayName}
        </p>
      </div>
    </>
  )
}

export default ResultName
