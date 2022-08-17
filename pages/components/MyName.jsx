import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export default function MyName(props) {
  const deleteName = () => {
    localStorage.removeItem('userName')
    props.setName("")
  }

  return (
    <>
      <p>hello, { props.name }!!</p>
      <button onClick={deleteName} className="w-20 border border-gray-500 hover:bg-primary hover:text-white">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </>
  )
}
