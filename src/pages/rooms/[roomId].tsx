import socket from "lib/socket-io"
import $api, { fetcher } from "lib/swr"
import { useRouter } from "next/router"
import useSWR from 'swr'
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import updateRoom from "src/rooms/mutations/updateRoom"

const RoomSchema = z.object({
  name: z.string()
})
type RoomSchemaType = z.infer<typeof RoomSchema>

const ShowRoomPage = () => {
  const router = useRouter()
  const roomId = router.query.roomId as string
  const { data: room, error } = useSWR<Room>(`${$api}/rooms/${roomId}`, fetcher)
  const { register, handleSubmit} = useForm<RoomSchemaType>({
    resolver: zodResolver(RoomSchema)
  })
  const onSubmit: SubmitHandler<RoomSchemaType> = (params) => {
    updateRoom(roomId, params)
  }
  const handleClick = () => {
    socket.emit("message", "hogehoge")
  }

  if (error) return <div>{error.toString() }</div>
  if (!room) return <div>loading...</div>

  return (
    <div>
      <p>{room.name}</p>
      <button className="btn" onClick={handleClick}>click</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Type here" className="input w-full max-w-xs" {...register('name', { required: true })} defaultValue={room.name} />
        <button type="submit" className="btn">submit</button>
      </form>
    </div>
  )
}

export default ShowRoomPage
