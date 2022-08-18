import { useEffect, useState } from "react"
import CopyLink from "../components/CopyLink"
import FibonacciNumber from "../components/FibonacciNumber"
import OpenButton from "../components/OpenButton"
import SetName from "../components/SetName"
import MyName from "../components/MyName"
import Result from "../components/Result"

export default function RoomsUid() {
  const [name, setName] = useState("")

  useEffect(() => {
    setName(localStorage.getItem('userName'))
  }, [])

  return (
    <>
      { name ? 
        <div className="flex flex-col w-fit gap-4">
          <MyName name={name} setName={setName} />
          <CopyLink />
          <OpenButton />
          <Result name={name} />
          <FibonacciNumber name={name}  />
        </div>
        :
        <SetName setName={setName} />
      }
    </>
  )
}
