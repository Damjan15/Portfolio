import { Footer, Navbar } from "../components"

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout