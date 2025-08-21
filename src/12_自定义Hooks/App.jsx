import React, { memo,useContext,useEffect, useState } from 'react'
// import {useUserToken} from './hooks'
import {useScrollPosition} from './hooks'
import "./style.css"

const Home = memo(()=> {
  const [scrollX,scrollY] = useScrollPosition()
  
  useEffect(()=>{
    function handleScroll(){
      console.log(window.scrollX,window.scrollY)
    }

    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  return <h1>Home Page:{scrollX}-{scrollY}</h1>
})

const About = memo(() => {
  // useEffect(()=>{
  //   function handleScroll(){
  //     console.log(window.scrollX,window.scrollY)
  //   }

  //   window.addEventListener("scroll",handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll",handleScroll)
  //   }
  // },[])
  const [scrollX,scrollY] = useScrollPosition()

  return <h1>About Page:{scrollX}-{scrollY}</h1>
})

const App = memo(() => {
  return (
    <div className='app'>
      <h1>App Root Component</h1>
      <Home/>
      <About/>
    </div>
  )
})

export default App