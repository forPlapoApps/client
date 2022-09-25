import { useContext, useEffect, useState } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'

export default function UserCalculate() {
  const { socket, uid } = useContext(RoomsUidContext)
  const [count, setCount] = useState([])
  
  useEffect(() => {
    socket.on('userCount', (user) => {
      setCount(user)
    })
  })

  return (
    <>
      <div>
        <p className='font-semibold'>{count} people now</p>
      </div>
    </>
  )
}
