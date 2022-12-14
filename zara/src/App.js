import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllRoutes from './pages/AllRoutes'
import Nav from './components/Navbar_Vicky/Nav.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
