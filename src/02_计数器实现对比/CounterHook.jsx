import {memo,useState} from "react"

// 普通函数里面不能使用hooks
// function foo(){
//   const [message] = useState("Hello world")
// }

// 在自定义的hooks中,可以使用react提供的其他hooks,必须使用use开头
function useFoo(){
  const [message] = useState("Hello world")
  return message
}

function CounterHook(props){
  const [counter, setCounter] = useState(0)

  // foo()
  const message = useFoo()

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
    </div>
  )
}

export default memo(CounterHook)