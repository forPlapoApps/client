import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { RoomsUidContext } from "../rooms/[uid]"

export default function Result () {
  const router = useRouter()
  const { uid } = router.query
  const [list, setList] = useState([])
  const { name, socket, isInProgress, setIsInProgress } = useContext(RoomsUidContext)

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
  }, [uid, name, socket])

  useEffect(() => {
    socket.on("openAllScore", () => {
      setIsInProgress(false)
    })
  }, [uid, name, socket, setIsInProgress])


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
