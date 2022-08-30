import { useContext } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'

export default function OpenButton() {
  const { socket, isInProgress, setIsInProgress, uid } = useContext(RoomsUidContext)

  const openAllScore = () => {
    setIsInProgress(false)
    socket.emit('openScoreRequest', { data: { roomUid: uid } })
  }

  const resetAllScore = () => {
    setIsInProgress(true)
    socket.emit('resetScoreRequest', { data: { roomUid: uid } })
  }

  return (
    <>
      {isInProgress ? (
        <button className='btn btn-primary' onClick={openAllScore}>
          Open
        </button>
      ) : (
        <button className='btn' onClick={resetAllScore}>
          Reset
        </button>
      )}
    </>
  )
}
