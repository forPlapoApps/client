import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

export default function Result (props) {
  const router = useRouter()
  const { uid } = router.query
  const [list, setList] = useState([])

  useEffect(() => {
    if (uid) {
      const data = { roomUid: uid, userName: props.name, value: 0 }
      socket.emit("sendScore", { data: data })
    }
  }, [uid, props.name])

  useEffect(() => {
    socket.on("receivedScore", (data) => {
      setList(data)
      return () => { socket.off("receivedScore") }
    })
  })

  return (
    <>
      { list.map((e, i) => (
        <p key={i}>{ e.data.userName }：{ e.data.value }</p>
      ))}
    </>
  )
}
