import useSWR from 'swr'
import $api, { fetcher } from 'lib/swr'
import router from 'next/router'
import createRoom from 'src/rooms/mutations/createRoom'
import Layout from 'src/core/layouts/Layout'
import RoomsTable, { RoomsTableSkelton } from 'src/rooms/components/RoomsTable'
import { Button } from 'flowbite-react'
import { TiPlus } from 'react-icons/ti'

const RoomList = () => {
  const { data: rooms, error } = useSWR<Room[]>(`${$api}/rooms`, fetcher)

  if (error) return <div>failed to load</div>
  if (!rooms) return <RoomsTableSkelton />

  return <RoomsTable rooms={rooms} />
}

const RoomsPage = () => {
  const createRoomButton = async () => {
    const room: Room = await createRoom()
    router.push(`/rooms/${room.id}`)
  }

  return (
    <Layout>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold'>Select Your Room</h1>
          <Button onClick={createRoomButton} size={'sm'} className='ml-auto'>
            <TiPlus className='w-5 h-5' />
          </Button>
        </div>

        <RoomList />
      </div>
    </Layout>
  )
}

export default RoomsPage
