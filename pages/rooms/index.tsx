import useSWR from 'swr'
import $api, { fetcher } from 'lib/swr'
import Link from 'next/link';
import router from 'next/router';

const RoomsPage = () => {
  const { data: rooms, error } = useSWR<Room[]>(`${$api}/rooms`, fetcher)

  const createRoomButton = async () => {
    const room: Room = await fetch(`${$api}/rooms`,{
      method: "POST"
    }).then((res) => res.json())
    router.push(`/rooms/${room.id}`)
  }

  if (error) return <div>failed to load</div>;
  if (!rooms) return <div>loading...</div>;

  return(
    <div>
      <h2>Room の一覧</h2>
      <ul className='flex flex-col'>
        {rooms.map((room: any) => (
          <Link  key={room.id} href={`/rooms/${room.id}`}>
            <a>
              {room.name}
            </a>
          </Link>
        ))}
      </ul>


      <button className="btn" onClick={createRoomButton}>create room</button>
    </div>
  )
}

export default RoomsPage
