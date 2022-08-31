import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [link, setLink] = useState('')

  const makeRoomUid = () => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randstr = ''
    let n = 30
    for (let i = 0; i < n; i++) {
      randstr += str[~~(Math.random() * str.length)]
    }
    setLink(randstr)
  }

  useEffect(() => {
    makeRoomUid()
  }, [])

  return (
    <>
      <div className='w-screen h-screen flex'>
        <div className='mx-auto my-10 w-fit flex flex-col gap-10'>
          <h1 className='text-3xl font-bold underline text-blue-500'>forPlapoApps!</h1>
          <Link href={`/rooms/${link}`}>
            <div className='btn btn-primary'>ルーム作成</div>
          </Link>
        </div>
      </div>
    </>
  )
}
