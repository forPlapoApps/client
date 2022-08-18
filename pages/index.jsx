import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [link, setLink] = useState("")

  const makeRoomUid = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randstr = '';
    let n = 30;
    for(let i=0; i<n; i++){
        randstr += str[~~(Math.random() * str.length)];
    }
    setLink(randstr)
  }

  useEffect(() => {
    makeRoomUid()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello Plapo!
      </h1>
      <div className="border border-gray-500 w-fit">
        <Link href={`/rooms/${link}`}>
          ルーム作成
        </Link>

      </div>
    </>

  )
}
