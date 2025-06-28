/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'
import Tags from './components/Tags'
function App() {

  return (
   <>
   <div>
      <Header/>
      <div className='w-full flex justify-center gap-5 mt-6'>
        <div className=''>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className=' '>
          <Tags/>
        </div>
      </div>
      
      
   </div>
   
   </>
  )
}

export default App
