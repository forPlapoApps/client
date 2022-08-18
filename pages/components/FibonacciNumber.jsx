import { useRouter } from "next/router"
import { useState } from "react"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

export default function FibonacciNumber (props) {
  const router = useRouter()
  const { uid } = router.query
  const [num, setNum] = useState(0)

  const selectScore = (e) => {
    setNum(e.target.value)
    const data = { roomUid: uid, userName: props.name, value: e.target.value }
    socket.emit("sendScore", { data: data })
  }

  return (
    <>
      <p>選択されたのは：{ num }</p>
      <div className="flex gap-2">
        { [1, 2, 3, 5, 8, 13, 21, 42].map((num, i) => (
          <label htmlFor={num} className="btn btn-primary" key={i} onChange={(e) => selectScore(e) }>
            {num} 
            <input type="radio" name="selectNumber" value={num} id={num} className="hidden" />
          </label>
        )) }
      </div>
    </>
  )
}