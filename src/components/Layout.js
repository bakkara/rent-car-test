import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';

const Layout = () => {
    return (
      <>
    <header>
          <nav>
              <Link to='/'>
                  Home
              </Link>
              <Link to='/catalog'>
                  Catalog
              </Link>
              <Link to='/favorites'>
                  Favorites
              </Link>
          </nav>          
      </header>
      <Suspense fallback={<Loader/> }>
                <Outlet />
            </Suspense>
    <Toaster position="top-right"/>
    </>
  )
}

export default Layout
