import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { RoomsUidContext } from "../rooms/[uid]"

export default function MyName() {
  const { name, setName, socket, uid } = useContext(RoomsUidContext)

  const deleteName = () => {
    localStorage.removeItem('userName')
    const data = { roomUid: uid, userName: name }
    socket.emit("logOutRoom", { data: data })
    setName("")
  }

  return (
    <>
      <p>hello, { name }!!</p>
      <button onClick={deleteName} className="w-20 border border-gray-500 hover:bg-primary hover:text-white">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </>
  )
}
