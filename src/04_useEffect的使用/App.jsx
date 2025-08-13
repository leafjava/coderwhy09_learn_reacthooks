import React, { memo,useEffect, useState } from 'react'

const App = memo(() => {
  const [count,setCount] = useState(0)

  // 负责告知react,在执行完当前组件渲染之后要执行的副作用代码
  useEffect(()=> {
    // 1.修改document的title（1行）
    console.log("修改title")
    

    
    // 写太多逻辑容易造成阅读障碍，代码量变多


    // 1.监听事件

    // 返回值:回调函数 => 组件被重新渲染或者组件卸载的时候执行
    return () => {
    }
  })

  // 一个函数式组件中,可以存在多个useEffect
  useEffect(() => {
    // 2.对redux中数据变量监听（10行）
    console.log("监听redux中的数据")
    return () => {
      // 取消redux中数据的监听
    }
  })

  useEffect(() => {
    // 3.监听eventBus中的why事件（15行）
    console.log("监听eventBus的why事件")
    return () => {
      // 取消eventBus中的why事件监听
    }
  })

  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+1{count}</button>
    </div>
  )
})

export default App