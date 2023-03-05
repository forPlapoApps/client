import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FC, useContext } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'
import socket from 'lib/socket'
import { useRouter } from 'next/router'

type Props = {
  name: string
  setName: any
}

const MyName: FC<Props> = ({ name, setName }) => {
  const router = useRouter()
  const { uid } = router.query

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

export default MyName
