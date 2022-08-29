import { useState } from "react"
import { useRouter } from "next/router"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

export default function OpenButton () {
  const [isInProgress, setIsInProgress] = useState(true)
  const router = useRouter()
  const { uid } = router.query

  const openAllScore = () => {
    setIsInProgress(false)
    socket.emit("openScoreRequest", { data: { roomUid: uid }})
  }

  const resetAllScore = () => {
    setIsInProgress(true)
    socket.emit("resetScoreRequest", { data: { roomUid: uid}})
  }

  return (
    <>
      { isInProgress ? 
        <button className="btn btn-primary" onClick={openAllScore}>Open</button>
        :
        <button className="btn" onClick={resetAllScore}>Reset</button>
      }
    </>
  )
}