import { useState, useEffect } from "react"

export default function RoomsUid() {
  const score_list = [1, 2, 3, 5, 8, 13, 21, 44]
  const [name, setName] = useState()

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
    console.log(e.target.value)
  }

  useEffect(() => {
    const inputName = localStorage.getItem('userName')
    setName(inputName)
  }, [name])

  if(!name) {
    return (
      <>
        <div className="flex">
          <p>名前を入力してください</p>
          <input type="text" className="border border-gray-500" onKeyPress={(e) => keyPress(e)} />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="flex">
          <p>Hello, {name}!! </p>
          <button onClick={deleteName} className="w-20 border border-gray-500">Change Name</button>
        </div>

        <select onChange={sendScore} name="score" className="w-20 border border-gray-500">
          { score_list.map((score) => (
            <option value={score} key={score}>{score}</option>
          ))}
        </select>
      </>
    )
  }
}