import { useEffect, useState, createContext } from "react"
import CopyLink from "../components/CopyLink"
import FibonacciNumber from "../components/FibonacciNumber"
import OpenButton from "../components/OpenButton"
import SetName from "../components/SetName"
import MyName from "../components/MyName"
import Result from "../components/Result"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

export const RoomsUidContext = createContext({})

export default function RoomsUid() {
  const [name, setName] = useState("")
  const value = { name, setName, socket }

  useEffect(() => {
    setName(localStorage.getItem('userName'))
  }, [])

  return (
    <>
      <RoomsUidContext.Provider value={ value }>
        { name ? 
          <div className="flex flex-col w-fit gap-4">
            <MyName />
            <CopyLink />
            <OpenButton />
            <Result />
            <FibonacciNumber />
          </div>
          :
          <SetName />
        }
      </RoomsUidContext.Provider>
    </>
  )
}
