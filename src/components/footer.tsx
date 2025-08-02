import { useContext } from "react"
import { DarkLightContext, type TDarkLightContext } from "./darklight.context"

export const Footer = () => {

    const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
    return (
        <div>
            <div className="z-10 fixed bottom-0 p-3 h-16 w-full backdrop-blur-md" ></div>
            <nav className="nav z-20 fixed bottom-0 p-3 h-16 w-full flex flex-row justify-between text-lime-200 bg-violet-950/35 border-t-2 border-lime-400" 
            id="footer"
            style={changeTheme == 'lightTheme' ? { background: '#83cd2950' } : { background: '#2e0d6850' }}
            >
                <h3 className="self-center">_agustin_m_marrero</h3>
            <div className="nav-content self-center">
                <ul className="nav-items flex flex-row gap-3 items-center">
                    <li className="footer_icon"><a target="_blank" href="https://www.linkedin.com/in/agustin-m-marrero">
                        {changeTheme === 'lightTheme' 
                            ? <img src="src/assets/icons/square-linkedin_dark.svg" alt="icono de linkedin" width={'30px'} />
                            : <img src="src/assets/icons/square-linkedin_light.svg" alt="icono de linkedin" width={'30px'} />
                        }
                    </a></li>
                    <li className="footer_icon"><a target="_blank" href="https://github.com/amarrero86mr">
                        {changeTheme === 'lightTheme'
                            ? <img src="src/assets/icons/square-github_dark.svg" alt="icono de github" width={'30px'} /> 
                            : <img src="src/assets/icons/square-github_light.svg" alt="icono de github" width={'30px'} />
                        }
                    </a></li>
                </ul>
            </div>
        </nav>
        </div>

    )
}