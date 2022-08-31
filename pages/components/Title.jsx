import Link from 'next/link'

export default function Title() {
  return (
    <>
      <Link href={'/'}>
        <p className='text-primary font-bold underline my-auto text-xl cursor-pointer'>forPlapoApps</p>
      </Link>
    </>
  )
}
