import "../App.css"
import { useContext } from "react"
import { DarkLightContext, type TDarkLightContext } from "./darklight.context"

export const Navbar = () => {

  const { changeTheme, fnChangeTheme } = useContext<TDarkLightContext>(DarkLightContext)

  const fnThem = () => {
    fnChangeTheme();
  }

  return (
    <div>
      <div className="z-10 fixed top-0 p-3 h-16 w-full backdrop-blur-md " ></div>
      <nav className="z-20 fixed top-0 p-3 h-16 w-full flex flex-row justify-between border-b-2 bg-transparent"
        id="navbar"
        style={changeTheme == 'lightTheme' ? { background: '#83CD2980' } : { background: '#2e0d6880' }}
      >
        <h3 className={`self-center nav-item ` + changeTheme}>_agustin_m_marrero</h3>
        <div className="nav-content self-center">
          <ul className="nav-items flex flex-row gap-3 items-center">
            <li className={`flex nav-icon ` + changeTheme}>
              <button
                className="justify-center"
                onClick={() => {
                  fnThem()
                }}>{changeTheme == 'lightTheme'
                  ? <img className="" src="src/assets/icons/moon.svg" alt="icono de luna" width={'30px'}/>
                  : <img src="src/assets/icons/sun.svg" alt="icono de sol" width={'30px'} />}</button></li>
            <li className={`nav-item p-1 ` + changeTheme}>HOME</li>
            <li className={`nav-item p-1 ` + changeTheme}>ABOUT_ME</li>
            <li className={`nav-item p-1 ` + changeTheme}>SKILLs</li>
            <li className={`nav-item p-1 ` + changeTheme}>PROJECTs</li>
            <li className={`nav-item p-1 ` + changeTheme}>CERTIFICATEs</li>
            <li className={`nav-item p-1 ` + changeTheme} >CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}