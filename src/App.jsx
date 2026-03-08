import { useState } from 'react'
// import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import blueBlob from './assets/images/blob-blue.png'
import yellowBlob from './assets/images/blob-yellow.png'

function App() {

  const [page, setPage] = useState('home')

  // This called Wrapper function or sometimes also called a passthrough function
  const navigate = (pageName) => setPage(pageName)

  function renderPage(){
    switch (page) {
      case "home": 
        return <Home clickToNavigate={navigate}/>
      case "quiz": 
        return <Quiz />
      default:  
        return <Home clickToNavigate={navigate}/>
    }
  }

  return (
    <>
      {renderPage()}
      <img className='yellow-blob' src={yellowBlob} alt='yellow blob'/>
      <img className='blue-blob'src={blueBlob} alt='blue blob'/>
    </>
  )
}

export default App
