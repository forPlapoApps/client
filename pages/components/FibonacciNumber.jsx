import { useContext, useState } from "react"
import { RoomsUidContext } from "../rooms/[uid]"

export default function FibonacciNumber () {
  const [num, setNum] = useState(0)
  const { name, socket, uid } = useContext(RoomsUidContext)

  const selectScore = (e) => {
    setNum(e.target.value)
    const data = { roomUid: uid, userName: name, value: e.target.value }
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
