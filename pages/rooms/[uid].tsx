import { useEffect, useState, createContext } from 'react'
import CopyLink from '../components/CopyLink'
import FibonacciNumber from '../components/FibonacciNumber'
import OpenButton from '../components/OpenButton'
import SetName from '../components/SetName'
import MyName from '../components/MyName'
import Result from '../components/Result'
import { useRouter } from 'next/router'
import Title from '../components/Title'
import { useBeforeunload } from 'react-beforeunload'
import socket from 'lib/socket'

export const RoomsUidContext = createContext({})

export default function RoomsUid() {
  const router = useRouter()
  const { uid } = router.query
  const [name, setName] = useState('')
  const [isInProgress, setIsInProgress] = useState(true)
  const [resultAverage, setResultAverage] = useState(0)
  const [resultAgreement, setResultAgreement] = useState('')

  const value = {
    name,
    setName,
    socket,
    isInProgress,
    setIsInProgress,
    uid,
  }

  useEffect(() => {
    setName(localStorage.getItem('userName')!)
  }, [])

  useBeforeunload((e) => {
    if (uid && name) {
      const data = { roomUid: uid, userName: name }
      socket.emit('logOutRoom', data)
    }
  })

  return (
    <>
      <RoomsUidContext.Provider value={value}>
        {name ? (
          <div className='w-screen h-screen p-4 flex flex-col justify-between'>
            <div className='flex'>
              <Title name={name} />
              <CopyLink />
            </div>
            <div className='flex'>
              <Result
                setResultAverage={setResultAverage}
                setResultAgreement={setResultAgreement}
                name={name}
                isInProgress={isInProgress}
                setIsInProgress={setIsInProgress}
              />
            </div>
            <div className='flex'>
              <OpenButton
                resultAverage={resultAverage}
                resultAgreement={resultAgreement}
                isInProgress={isInProgress}
                setIsInProgress={setIsInProgress}
              />
            </div>
            <div className='flex'>
              <MyName name={name} setName={setName} />
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
