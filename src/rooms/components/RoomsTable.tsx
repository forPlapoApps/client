import { Table } from 'flowbite-react'
import Link from 'next/link'
import dateFormat from 'dateformat'
import LoadingAnimation from 'src/core/components/LoadingAnimation'

type Props = {
  rooms: Room[]
}

const RoomsTable = ({ rooms }: Props) => {
  return (
    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Room Name</Table.HeadCell>
        <Table.HeadCell>Members</Table.HeadCell>
        <Table.HeadCell>Created At</Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        <>
          {rooms.map((room) => (
            <Table.Row key={room.id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {room.name}
              </Table.Cell>
              <Table.Cell>{room.participantsLength}</Table.Cell>
              <Table.Cell>{dateFormat(room.createdAt, 'fullDate')}</Table.Cell>
              <Table.Cell>
                <Link href={`/rooms/${room.id}`}>
                  <a className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
                    Visit
                  </a>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </>
      </Table.Body>
    </Table>
  )
}

// TODO: Tableのスケルトンをこちらに実装
const RoomsTableSkelton = () => {
  return (
    <LoadingAnimation />
  )
}

export default RoomsTable
export { RoomsTableSkelton }
