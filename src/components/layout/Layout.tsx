import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" role="main">{children}</main>
      <Footer />
    </>
  )
}
