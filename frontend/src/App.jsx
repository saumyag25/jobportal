
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Job from './components/Jobs'
import Browse from './components/Browse'

const appRouter =createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path:'/jobs',
    element:<Job/>
  },
  {
    path:'/browse',
    element:<Browse/>
  }
])
function App() {
  
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
