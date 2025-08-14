import React, { memo, useCallback, useState } from 'react'

// useCallback性能优化的点:
// 1.当需要将一个函数传递给子组件时,最好使用useCallback进行优化,将优化之后的函数传递给子组件

// props中的属性发生改变时,组件本身就会被重新渲染
const HYHome = memo(function(props) {
  const {increment} = props

  console.log("HYHome被渲染")

  return (
    <div>
      <button onClick={increment}>increment+1</button>

      {/* 100个子组件 */}
    </div>
  )
})

const App = memo(function(){
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("hello")

  // const increment = e => {
  //   setCount(count + 1)
  // }
  // function increment(){
  //   setCount(count + 1)
  // }

  // 闭包陷阱 useCallback
  const increment = useCallback(function foo(){
    setCount(count + 1)
    console.log("increment")
  },[count])

  // 普通函数
  // const increment = () => {
  //   setCount(count + 1)
  // }

  return (
    <div>
      <h2>计数:{count}</h2>
      <button onClick={increment}>+1</button>

      <HYHome increment={increment}/>

      <h2>message:{message}</h2>
      <button onClick={e => setMessage(Math.random())}>修改message</button>
    </div>
  )
})

// 闭包
// function foo(name){

//   function bar(){
//     console.log(name)
//   }

//   return bar
// }

// const bar1 = foo("why")
// bar1() //why

// const bar2 = foo("kobe")
// bar2() //kobe

// bar1() //why

export default App