import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { logout } from 'services/plapo/logout'

type InitialProps = { uid: string }

const ChangeNameButton = memo(function ChangeNameButtonMemo({ uid }: InitialProps) {
  const router = useRouter()
  const name = localStorage.getItem('userName')

  const deleteName = () => {
    logout(uid, name)
    localStorage.removeItem('userName')
    router.reload()
  }

  return (
    <button onClick={deleteName} className='btn btn-sm my-auto gap-2'>
      <FontAwesomeIcon icon={faAngleLeft} />
      <p>Change Name</p>
    </button>
  )
})

export default ChangeNameButton
