import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllRoutes from './pages/AllRoutes'
import Nav from './components/Navbar_Vicky/Nav.jsx'
import Mens from './components/Mens_Vicky/Mens'

function App() {
  return (
    <div className="App">
      <Nav />
      <Mens />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App