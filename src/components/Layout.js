import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import Header from './Header/Header';

const Layout = () => {
    return (
      <>
    <Header/>
      <Suspense fallback={<Loader/> }>
                <Outlet />
            </Suspense>
    <Toaster position="top-right"/>
    </>
  )
}

export default Layout
