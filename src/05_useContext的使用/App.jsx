import React, { memo, useContext } from 'react'
import { UserContext,ThemeContext } from './context'

const App = memo(() => {
  // 使用Context
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      {/* 以前要写的 */}
      {/* <UserContext.Consumer>
        {
          value => {
            return (<h2>
              <ThemeContext.Consumer>
                {value => {}}
              </ThemeContext.Consumer>
            </h2>)
          }
        }
      </UserContext.Consumer> */}
      {/* 现在简化的 */}
      <h2>User:{user.name}-{user.level}</h2>
      <h2 style={{color:theme.color,fontSize:theme.size}}>Theme</h2>
    </div>
  )
})

export default App