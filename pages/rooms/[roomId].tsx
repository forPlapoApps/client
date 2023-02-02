import socket from "lib/socket-io"

const ShowRoomPage = () => {
  const handleClick = () => {
    socket.emit("message", "hogehoge")
  }

  return (
    <div>
      <p>hogehgoe</p>
      <button className="btn" onClick={handleClick}>click</button>
    </div>
  )
}

export default ShowRoomPage
