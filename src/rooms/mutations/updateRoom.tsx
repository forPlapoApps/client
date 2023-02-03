import $api from "lib/swr"

type RoomParams = { name: string }

const updateRoom = (roomId: string, params: RoomParams) => {
  const room = fetch(`${$api}/rooms/${roomId}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(params)
  })
  return room
}

export default updateRoom
