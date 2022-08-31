import Link from 'next/link'

export default function Title() {
  return (
    <>
      {/* 離れたときにコンポーネントが破棄されてないかも */}
      <Link href={'/'}>
        <p className='text-primary font-bold underline my-auto text-xl cursor-pointer'>forPlapoApps</p>
      </Link>
    </>
  )
}
