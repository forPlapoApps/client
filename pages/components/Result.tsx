import { FC, useEffect, useState } from 'react'
import Spinner from './Spinner'
import ResultName from './Result/Name'
import ResultNumber from './Result/Number'
import agreement from '../../utils/calcutateAgreement'
import socket from 'lib/socket'
import { useRouter } from 'next/router'

type Props = {
  name: string
  isInProgress: boolean
  setIsInProgress: any // あとで修正
  setResultAverage: any
  setResultAgreement: any
}

const Result: FC<Props> = ({
  name,
  isInProgress,
  setIsInProgress,
  setResultAverage,
  setResultAgreement,
}) => {
  const router = useRouter()
  const { uid } = router.query

  const [list, setList] = useState([])

  useEffect(() => {
    if (uid) {
      const data = { roomUid: uid, userName: name, value: 0 }
      socket.emit('sendScore', data)
    }
  }, [uid, name, socket])

  useEffect(() => {
    socket.on('receivedScore', (data) => {
      setList(
        data.sort((a: any, b: any) => {
          return a.userName.localeCompare(b.userName, 'ja')
        }),
      )
      return () => {
        socket.off('receivedScore')
      }
    })
  }, [uid, name, socket])

  useEffect(() => {
    let total = 0
    list.forEach((e: any) => {
      total = Number(total) + Number(e.value)
    })
    const average = Math.round((total / list.length) * 10) / 10
    const valueArray = list.map((e: any) => {
      return Number(e.value)
    })

    setResultAverage(average)
    setResultAgreement(agreement(valueArray))
  }, [list, uid])

  useEffect(() => {
    socket.on('openAllScore', () => {
      setIsInProgress(false)
    })
  }, [uid, name, socket, setIsInProgress])

  useEffect(() => {
    socket.on('resetAllScore', (data) => {
      setList(
        data.sort((a: any, b: any) => {
          return a.userName.localeCompare(b.userName, 'ja')
        }),
      )
      setIsInProgress(true)
    })
  }, [setIsInProgress, socket])

  return (
    <>
      {list[0] ? (
        <div className='flex gap-4 mx-auto'>
          {list.map((e: any, i) => (
            <div key={i} className='flex flex-col gap-2 '>
              <ResultNumber score={e.value} isInProgress={isInProgress} />
              <ResultName displayName={e.userName} myName={name} />
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
      {/* {isInProgress ? <p>progress...</p> : <p>Ave: {average}</p>} */}
    </>
  )
}

export default Result
