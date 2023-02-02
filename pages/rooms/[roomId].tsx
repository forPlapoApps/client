import socket from "lib/socket-io"
import $api, { fetcher } from "lib/swr"
import { useRouter } from "next/router"
import useSWR from 'swr'

const ShowRoomPage = () => {
  const router = useRouter()
  const { roomId } = router.query
  const { data: room, error } = useSWR<Room>(`${$api}/rooms/${roomId}`, fetcher)

  const handleClick = () => {
    socket.emit("message", "hogehoge")
  }

  if (error) return <div>{error.toString() }</div>
  if (!room) return <div>loading...</div>

  return (
    <div>
      <p>{room.name}</p>
      <button className="btn" onClick={handleClick}>click</button>
    </div>
  )
}

export default ShowRoomPage
