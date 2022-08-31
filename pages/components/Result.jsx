import { useContext, useEffect, useState } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'

export default function Result() {
  const [list, setList] = useState([])
  const [average, setAverage] = useState(0)
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
    const average = total / list.length
    setAverage(average)
  }, [average, list, uid])

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
      {list.map((e, i) => (
        <div key={i} className='flex'>
          {e.data.userName}：
          {isInProgress ? (
            e.data.value === 0 ? (
              <p>Thinking...🤔</p>
            ) : (
              <p>Selected!✨</p>
            )
          ) : (
            <p>{e.data.value}</p>
          )}
        </div>
      ))}
      {isInProgress ? <p>progress...</p> : <p>Ave: {average}</p>}
    </>
  )
}
