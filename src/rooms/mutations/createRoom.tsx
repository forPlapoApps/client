import $api from "lib/swr"

const createRoom = () => {
  const room = fetch(`${$api}/rooms`,{
    method: "POST"
  }).then((res) => res.json())
  return room
}

export default createRoom
