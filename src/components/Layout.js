import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

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
      <Suspense fallback={<p>Loader...</p>}>
                <Outlet />
        </Suspense>
    </>
  )
}

export default Layout
