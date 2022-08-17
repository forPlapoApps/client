import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { io } from "socket.io-client"
import { useRouter } from "next/router"

const socket = io("http://localhost:5000")

export default function MyName(props) {
  const router = useRouter()
  const { uid } = router.query
  const deleteName = () => {
    localStorage.removeItem('userName')
    const data = { roomUid: uid, userName: props.name }
    socket.emit("logOutRoom", { data: data })
    props.setName("")
  }

  return (
    <>
      <p>hello, { props.name }!!</p>
      <button onClick={deleteName} className="w-20 border border-gray-500 hover:bg-primary hover:text-white">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </>
  )
}
