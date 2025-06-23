
import './App.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Hero } from './sections/hero'
import { About } from './sections/about'
import { Skills } from './sections/skills'
import { Certificates } from './sections/certificates'

function App() {


  return (
    <>
      <div className="contain_main"></div>
      <div className='contain'>
        <Navbar />
        <main>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
           {/* <section id="projects"><Projects /></section> */}
        <section id="certificates"><Certificates /></section>
        {/* <section id="contact"><Contact /></section> */}
        </main>
        <Footer />
      </div>


    </>
  )
}

export default App
