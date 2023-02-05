import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

export default function MyName() {
  const { name, setName, socket, uid } = useContext(RoomsUidContext)

  const deleteName = () => {
    localStorage.removeItem('userName')
    const data = { roomUid: uid, userName: name }
    socket.emit('logOutRoom', data)
    setName('')
  }

  return (
    <>
      <button onClick={deleteName} className='btn btn-sm my-auto gap-2'>
        <FontAwesomeIcon icon={faAngleLeft} />
        <p>Change Name</p>
      </button>
    </>
  )
}
