import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import io from "socket.io-client"

const socket = io("http://localhost:5000")

export default function RoomsUid() {
  const router = useRouter()
  const { uid } = router.query
  const [name, setName] = useState("")
  const [list, setList] = useState([])

  const keyPress = (e) => {
    if(e.key == "Enter") {
      localStorage.setItem('userName', e.target.value)
      setName(e.target.value)
    }
  }

  const deleteName = () => {
    localStorage.removeItem('userName')
    setName("")
  }

  const sendScore = (e) => {
    const data = { roomUid: uid, userName: name, value: e.target.value }
    socket.emit("sendScore", { data: data })
  }

  const joinRoom = () => {
    const data = { roomUid: uid, userName: name, value: 0 }
    socket.emit("sendScore", { data: data })
  }

  const myScore = () => {
    return list.filter((e) => {
      return e.data.roomUid === uid && e.data.userName === name
    })
  }

  const isFirstSelect = () => {
    const firstScore = myScore()
    return firstScore.length === 0
  }

  useEffect(() => {
    const inputName = localStorage.getItem('userName')
    setName(inputName)
  }, [name])

  useEffect(() => {
    socket.on("receivedScore", (data) => {
      setList(data)
      return () => {
        socket.off("receivedScore")
      }
    })
  }, [])


  if(!name) {
    return (
      <>
        <div className="flex">
          <p>名前を入力してください</p>
          <input type="text" className="border border-gray-500" onKeyPress={(e) => keyPress(e)} />
        </div>
      </>
    )
  } else if (isFirstSelect()) {
    return (
      <button onClick={joinRoom} className="w-20 border border-gray-500">
        Join Room
      </button>
    )
  } else {
    return (
      <>
        <div className="flex">
          <p>Hello, {name}!! </p>
          <button onClick={deleteName} className="w-20 border border-gray-500">Change Name</button>
        </div>

        <select onChange={sendScore} name="score" className="w-20 border border-gray-500">
          { [1, 2, 3, 5, 8, 13, 21, 44].map((score) => (
            <option value={score} key={score}>{score}</option>
          ))}
        </select>

        { list.map((e, i) => (
          <div key={i}>{ e.data.userName }：{ e.data.value }</div>
        )) }
      </>
    )
  }
}