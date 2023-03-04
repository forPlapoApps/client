import { io } from "socket.io-client";
import $api from "utils/$api";

export const socket = io($api, {
  closeOnBeforeunload: false,
})

export default socket
