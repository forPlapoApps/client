import { useContext } from "react"
import { RoomsUidContext } from "../rooms/[uid]"

export default function SetName () {
  const { setName } = useContext(RoomsUidContext)
  const keyPress = (e) => {
    if(e.key == "Enter") {
      localStorage.setItem('userName', e.target.value)
      setName(e.target.value)
    }
  }

  return (
    <>
      <div className="flex">
        <p>名前を入力してください</p>
        <input type="text" className="border border-gray-500" onKeyPress={(e) => keyPress(e)} />
      </div>
    </>
  )
}
