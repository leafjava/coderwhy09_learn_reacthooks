import React, { memo,useEffect,useRef } from 'react'

const App = memo(() => {
  useEffect(() => {
    
  },[])

  const titleRef = useRef()
  const inputRef = useRef()

  function showTitleDom(){
    console.log(titleRef.current)
    inputRef.current.focus()
  }


  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <input type='text' ref={inputRef}></input>
      <button onClick={showTitleDom}>查看title的dom</button>
    </div>
  )

})



export default App