import { useState } from 'react'
// import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'

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
    </>
  )
}

export default App
