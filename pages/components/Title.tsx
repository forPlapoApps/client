import { useRouter } from 'next/router'
import { FC } from 'react'
import socket from 'lib/socket'

type Props = {
  name: string
}

const Title: FC<Props> = ({ name }) => {
  const router = useRouter()
  const { uid } = router.query

  const RedirectToRoot = () => {
    const data = { roomUid: uid, userName: name }
    socket.emit('logOutRoom', data)
    router.push('/')
  }

  return (
    <div onClick={RedirectToRoot}>
      <p className='text-primary font-bold underline my-auto text-xl cursor-pointer'>
        forPlapoApps
      </p>
    </div>
  )
}

export default Title
