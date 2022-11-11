import { useContext, useEffect, useState } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'
import Spinner from './Spinner'
import ResultName from './Result/Name'
import ResultNumber from './Result/Number'
import agreement from '../../utils/calcutateAgreement'

export default function Result(props) {
  const [list, setList] = useState([])
  // const [average, setAverage] = useState(0)
  const { name, socket, isInProgress, setIsInProgress, uid } = useContext(RoomsUidContext)

  useEffect(() => {
    if (uid) {
      const data = { roomUid: uid, userName: name, value: 0 }
      socket.emit('sendScore', { data: data })
    }
  }, [uid, name, socket])

  useEffect(() => {
    socket.on('receivedScore', (data) => {
      setList(data)
      return () => {
        socket.off('receivedScore')
      }
    })
  }, [uid, name, socket])

  useEffect(() => {
    let total = 0
    list.forEach((e) => {
      total = Number(total) + Number(e.data.value)
    })
    const average = Math.round(total / list.length * 10) / 10
    const valueArray = list.map((e) => {
      return Number(e.data.value)
    })

    props.setResultAverage(average)
    props.setResultAgreement(agreement(valueArray))
  }, [list, uid, props])

  useEffect(() => {
    socket.on('openAllScore', () => {
      setIsInProgress(false)
    })
  }, [uid, name, socket, setIsInProgress])

  useEffect(() => {
    socket.on('resetAllScore', (data) => {
      setList(data)
      setIsInProgress(true)
    })
  })

  return (
    <>
      {list[0] ? (
        <div className='flex gap-4 mx-auto'>
          {list.map((e, i) => (
            <div key={i} className='flex flex-col gap-2 '>
              <ResultNumber score={e.data.value} />
              <ResultName name={e.data.userName} />
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
