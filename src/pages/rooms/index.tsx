import useSWR from 'swr'
import $api, { fetcher } from 'lib/swr'
import router from 'next/router';
import createRoom from 'src/rooms/mutations/createRoom';
import Layout from 'src/core/components/Layout';
import RoomsTable from 'src/rooms/components/RoomsTable';
import { Button } from 'flowbite-react';
import {TiPlus} from 'react-icons/ti'

const RoomsPage = () => {
  const { data: rooms, error } = useSWR<Room[]>(`${$api}/rooms`, fetcher)

  const createRoomButton = async () => {
    const room: Room = await createRoom()
    router.push(`/rooms/${room.id}`)
  }

  if (error) return <div>failed to load</div>;
  if (!rooms) return <div>loading...</div>;

  return(
    <Layout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <h1 className='text-2xl font-bold'>Select Your Room</h1>
          <Button onClick={createRoomButton} size={'sm'} className='ml-auto'>
            <TiPlus className='w-5 h-5' />
          </Button>
        </div>
        <RoomsTable rooms={rooms} />
      </div>

    </Layout>
  )
}

export default RoomsPage
