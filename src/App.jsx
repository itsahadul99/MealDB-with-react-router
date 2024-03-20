
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main className='container mx-auto px-10 py-10'>
        <Outlet />
      </main>
    </>
  )
}

export default App
