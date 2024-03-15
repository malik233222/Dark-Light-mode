import { useContext, useEffect } from 'react'
import { darkContext } from './Dark'
import Test from './components/Test';
import Navbar from './components/Navbar';
import '../src/index.css'
function App() {
 //!Bu hisseni anlamadim
  const {mode }= useContext(darkContext)

  useEffect(() => {
    if (mode) {
      document.body.classList.add('dark')
  }
  else {
      document.body.classList.remove('dark')

  }
  }, [])

  return (
    <>
      <h1>App</h1>
      <Test />
      <Navbar />
    </>
  )
}

export default App
