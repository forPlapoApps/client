import { createContext, useEffect, useState } from "react"
import CopyLink from "../components/CopyLink"
import FibonacciNumber from "../components/FibonacciNumber"
import MyName from "../components/MyName"
import OpenButton from "../components/OpenButton"
import Result from "../components/Result"
import SetName from "../components/SetName"
import { io } from "socket.io-client"
import { useRouter } from "next/router"

export const RoomsUidContext = createContext()

function url() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000"
  } else if(process.env.NODE_ENV === "production" ) {
    return "https://for-plapo-apps-client.vercel.app"
  }
}

export default function RoomsUid() {
  const [name, setName] = useState("")
  const socket = io(url())
  const router = useRouter()
  const { uid } = router.query
  const value = { name, setName, socket, uid }

  useEffect(() => {
    setName(localStorage.getItem('userName'))
  }, [])

  return (
    <>
      <RoomsUidContext.Provider value={value}>
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
