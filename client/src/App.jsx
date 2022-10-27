import { Navbar, Footer, Header, Services, Testimonials } from './components'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#050810] via-[#0A0A18] to-[#202155] ">
      <Header />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
