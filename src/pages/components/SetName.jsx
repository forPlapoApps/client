import { useContext } from 'react'
import { RoomsUidContext } from '../rooms/[uid]'

export default function SetName() {
  const { setName } = useContext(RoomsUidContext)
  const keyPress = (e) => {
    if (e.key == 'Enter') {
      localStorage.setItem('userName', e.target.value)
      setName(e.target.value)
    }
  }

  return (
    <>
      <div className='flex w-screen'>
        <div className='mx-auto w-fit m-20 flex flex-col gap-4'>
          <p className='text-primary text-2xl font-bold'>名前を入力してください</p>
          <input
            type='text'
            className='input input-bordered w-full'
            onKeyPress={(e) => keyPress(e)}
          />
        </div>
      </div>
    </>
  )
}
