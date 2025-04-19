
import { NavLink,Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <nav>
        <NavLink to  = '/'>Home</NavLink>
        <NavLink to  = '/AboutPage'>About</NavLink>
        <NavLink to  = '/*'>NotFoundPage</NavLink>
      </nav>

      <Outlet/>
      
      </div>
  )
}

export default App
