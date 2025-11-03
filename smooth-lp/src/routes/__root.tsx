import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/header'
import Footer from '../components/footer'

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
