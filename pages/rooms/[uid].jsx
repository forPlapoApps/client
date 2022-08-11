import { useState, useEffect } from "react"

export default function RoomsUid() {
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
        <p>Hello, {name}!! </p>
        <button onClick={deleteName}>Change Name</button>

        
      </>
    )
  }
}