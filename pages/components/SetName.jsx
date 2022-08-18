export default function SetName (props) {
  const keyPress = (e) => {
    if(e.key == "Enter") {
      localStorage.setItem('userName', e.target.value)
      props.setName(e.target.value)
    }
  }

  return (
    <>
      <div className="flex">
        <p>名前を入力してください</p>
        <input type="text" className="border border-gray-500" onKeyPress={(e) => keyPress(e)} />
      </div>
    </>
  )
}
