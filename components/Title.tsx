import { useRouter } from '../node_modules/next/router'
import { logout } from '../services/plapo/logout'

type InitialProps = { uid: string }

const Title = ({ uid }: InitialProps) => {
  const router = useRouter()
  const name = localStorage.getItem('userName')

  const handleClick = () => {
    logout(uid, name)
    router.push('/')
  }

  return (
    <div onClick={handleClick}>
      <p className='text-primary font-bold underline my-auto text-xl cursor-pointer'>
        forPlapoApps
      </p>
    </div>
  )
}

export default Title
