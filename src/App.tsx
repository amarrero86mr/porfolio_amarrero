
import './App.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Hero } from './sections/hero'
import { About } from './sections/about'
import { Skills } from './sections/skills'
import { Certificates } from './sections/certificates'
import { Projects } from './sections/projects'
import { useContext } from 'react'
import { DarkLightContext, type TDarkLightContext } from './components/darklight.context'

function App() {

  const {changeTheme, changeBackground} = useContext<TDarkLightContext>(DarkLightContext)

  // const [buttonDarkLigth, setButtonDarkLigth ] = useState<boolean>(true)
  // const [themeStyle, setThemeStyle ] = useState<string>("themelight")
  // const [theStyle, setTheStyle ] = useState<string>("thelight")
  // const onDark = () => { 
  //   const tstyle = !buttonDarkLigth
  //   setButtonDarkLigth(tstyle)
  //   if (tstyle) {
  //     setThemeStyle('themelight')
  //     setTheStyle('thelight')
  //   } else {
  //     setThemeStyle('themedark')
  //     setTheStyle('thedark')
  //   }
  // }

  
  return (
    <body className={`backgound ` + changeBackground}>
      <div className={`contain_main ` + changeBackground}></div>
      <div className={`contain ` + changeTheme}>
        {/* <Navbar handleTheme={onDark}/> */}
        <Navbar />
        <main>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="certificates"><Certificates /></section>
          {/* <section id="contact"><Contact /></section> */}
        </main>
        <Footer />
      </div>


    </body>
  )
}

export default App
