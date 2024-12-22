import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footers'
import toast, { Toaster } from 'react-hot-toast';


function App() {
 

  return (
    <>
    <Header />
      <main style={{height: '73vh' }}>
          <Outlet />
      </main>
       <Footer />
       <Toaster />
      </>
  )
}

export default App
