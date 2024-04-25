import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx';

function App() {

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App
