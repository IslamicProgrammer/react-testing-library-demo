import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(1)

  return (
    <div>
      <h3 data-testid="heading">My Counter</h3>
      <div>{counter}</div>
    </div>
  )
}

export default Counter
