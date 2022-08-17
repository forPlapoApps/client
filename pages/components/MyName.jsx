export default function MyName(props) {
  const deleteName = () => {
    localStorage.removeItem('userName')
    props.setName("")
  }

  return (
    <>
      <p>hello, { props.name }!!</p>
      <button onClick={deleteName} className="w-20 border border-gray-500">Change Name</button>
    </>
  )
}
