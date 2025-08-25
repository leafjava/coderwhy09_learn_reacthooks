import React, { memo,useState } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [showNames,setShowNames] = useState(namesArray)

  function valueChangeHandle(event){
    // console.log(event.target.value)
    const keyword = event.target.value
    const filterShowNames = namesArray.filter(item => item.includes(keyword))
    setShowNames(filterShowNames)
  }

  return (
    <div>
      <input type="text" onInput={valueChangeHandle}></input>
      <h2>用户名列表:</h2>
      <ul>
        {
          showNames.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App