import { useContext, useEffect, useState } from "react"
import { RoomsUidContext } from "../rooms/[uid]"

export default function Result () {
  const [list, setList] = useState([])
  const [isInProgress, setIsInProgress] = useState(true)
  const { name, socket, uid } = useContext(RoomsUidContext)

  useEffect(() => {
    if (uid) {
      const data = { roomUid: uid, userName: name, value: 0 }
      socket.emit("sendScore", { data: data })
    }
  }, [uid, name, socket])

  useEffect(() => {
    socket.on("receivedScore", (data) => {
      setList(data)
      return () => { socket.off("receivedScore") }
    })
  }, [socket])

  useEffect(() => {
    socket.on("openAllScore", () => {
      setIsInProgress(false)
    })
  }, [socket])


  useEffect(() => {
    socket.on("resetAllScore" , (data) => {
      setList(data)
      setIsInProgress(true)
    })
  })

  return (
    <>
      { list.map((e, i) => (
        <div key={i} className="flex">
          { e.data.userName }：
          { isInProgress ? 
            e.data.value === 0 ?
              <p>Thinking...</p>
            :
              <p>Selected!</p>
          :
            <p>{ e.data.value }</p>
          }
          
        </div>
      ))}
    </>
  )
}
