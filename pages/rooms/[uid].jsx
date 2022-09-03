import { useEffect, useState, createContext } from 'react'
import CopyLink from '../components/CopyLink'
import FibonacciNumber from '../components/FibonacciNumber'
import OpenButton from '../components/OpenButton'
import SetName from '../components/SetName'
import MyName from '../components/MyName'
import Result from '../components/Result'
import { io } from 'socket.io-client'
import { useRouter } from 'next/router'
import Title from '../components/Title'

// const url = "http://localhost:8000"
const url = 'https://for-plapo-apps-server.herokuapp.com'
const socket = io(url, {
  closeOnBeforeunload: false,
})

export const RoomsUidContext = createContext({})

export default function RoomsUid() {
  const router = useRouter()
  const { uid } = router.query
  const [name, setName] = useState('')
  const [isInProgress, setIsInProgress] = useState(true)
  const value = {
    name,
    setName,
    socket,
    isInProgress,
    setIsInProgress,
    uid,
  }

  const onUnload = (e, uid, name, socket) => {
    if (uid && name) {
      const data = { roomUid: uid, userName: name }
      socket.emit('logOutRoom', { data: data })
    }
  }

  useEffect(() => {
    setName(localStorage.getItem('userName'))
  }, [])

  useEffect(() => {
    window.addEventListener('beforeunload', (e) => {
      onUnload(e, uid, name, socket)
    })
    return () => {
      window.removeEventListener('beforeunload', (e) => {
        onUnload(e, uid, name, socket)
      })
    }
  }, [name, uid])

  return (
    <>
      <RoomsUidContext.Provider value={value}>
        {name ? (
          <div className='w-screen h-screen p-4 flex flex-col justify-between'>
            <div className='flex'>
              <Title />
              <CopyLink />
            </div>
            <div className='flex'>
              <Result />
            </div>
            <div className='flex'>
              {/* culculateNumber */}
              <OpenButton />
            </div>
            <div className='flex'>
              <MyName />
              <FibonacciNumber />
            </div>
          </div>
        ) : (
          <SetName />
        )}
      </RoomsUidContext.Provider>
    </>
  )
}
