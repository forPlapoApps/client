import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { io } from "socket.io-client"
import { RoomsUidContext } from "../rooms/[uid]"

const socket = io("http://localhost:5000")

export default function Result () {
  const router = useRouter()
  const { uid } = router.query
  const [list, setList] = useState([])
  const [isInProgress, setIsInProgress] = useState(true)
  const { name } = useContext(RoomsUidContext)

  useEffect(() => {
    if (uid) {
      const data = { roomUid: uid, userName: name, value: 0 }
      socket.emit("sendScore", { data: data })
    }
  }, [uid, name])

  useEffect(() => {
    socket.on("receivedScore", (data) => {
      setList(data)
      return () => { socket.off("receivedScore") }
    })
  }, [])

  useEffect(() => {
    socket.on("openAllScore", () => {
      setIsInProgress(false)
    })
  }, [])


  useEffect(() => {
    socket.on("resetAllScore" , (data) => {
      console.log(data)
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
