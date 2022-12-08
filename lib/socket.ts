import { io } from "node_modules/socket.io-client/build/esm/index"

const url = process.env.SERVER_URL
const socket = io(url, {
  closeOnBeforeunload: false,
})

export default socket