import { useContext } from "react"

export default function ResultName(props) {
  const { name } = useContext(RoomsUidContext) 
  const isMyName = (value) => {
    return value === name
  }

  return (
    <>
      <div className='flex'>
        <p className={`mx-auto font-bold ${isMyName(props.name) ? 'text-accent text-xl' : ''}`}>{props.name}</p>
      </div>
    </>
  )
}
