import React, { memo, useCallback, useState } from 'react'

const App = memo(function(){
  const [count, setCount] = useState(0)

  // const increment = e => {
  //   setCount(count + 1)
  // }
  function increment(){
    setCount(count + 1)
  }

  return (
    <div>
      <h2>计数:{count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App