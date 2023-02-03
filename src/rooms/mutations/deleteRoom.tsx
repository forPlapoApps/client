import $api from "lib/swr"

const deleteRoom = (roomId: string) => {
  const room = fetch(`${$api}/rooms/${roomId}`, {
    method: "DELETE"
  })
  return room
}

export default deleteRoom
