import { useState } from "react"

export default function FibonacciNumber () {
  const [num, setNum] = useState(0)

  return (
    <>
      <p>選択されたのは：{ num }</p>
      <div className="flex gap-2">
        { [1, 2, 3, 5, 8, 13, 21, 42].map((num, i) => (
          <label htmlFor={num} className="btn btn-active btn-primary" key={i} onClick={e => { setNum(e.target.value) }}>
            {num} 
            <input type="radio" name="selectNumber" value={num} id={num} className="hidden" />
          </label>
        )) }
      </div>
    </>
  )
}