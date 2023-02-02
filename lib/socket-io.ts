import { io } from "socket.io-client"

const url = process.env.SERVER_URL
const socket = io(url, {
  closeOnBeforeunload: false,
})

export default socket
