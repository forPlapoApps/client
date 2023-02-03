import { useRouter } from "next/router"
import { useContext } from "react"
import { RoomsUidContext } from "../rooms/[uid]"

export default function Title() {
  const router = useRouter()
  const { uid, name, socket } = useContext(RoomsUidContext)

  const RedirectToRoot = () => {
    const data = { roomUid: uid, userName: name }
    socket.emit('logOutRoom', data)
    router.push('/')
  }

  return (
    <>
      <div onClick={RedirectToRoot}>
        <p className='text-primary font-bold underline my-auto text-xl cursor-pointer'>forPlapoApps</p>
      </div>
    </>
  )
}
