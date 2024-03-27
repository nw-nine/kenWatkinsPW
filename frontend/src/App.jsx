import { BrowserRouter } from 'react-router-dom'
import Nav from './layout/Nav'
import Router from './layout/Router'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  )
}

export default App
