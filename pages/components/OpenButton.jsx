import { useState } from "react"

export default function OpenButton () {
  const [isInProgress, setIsInProgress] = useState(true)

  const openAllScore = () => {
    console.log('openButtonが押されました。')
    setIsInProgress(false)
  }

  const resetAllScore = () => {
    console.log('resetButtonが押されました')
    setIsInProgress(true)
  }

  return (
    <>
      { isInProgress ? 
        <button className="btn btn-primary" onClick={openAllScore}>Open</button>
        :
        <button className="btn" onClick={resetAllScore}>Reset</button>
      }
    </>
  )
}