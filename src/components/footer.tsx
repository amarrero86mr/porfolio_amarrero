
export const Footer = () => {

    return (
        <div>
            <div className="z-10 fixed bottom-0 p-3 h-16 w-full backdrop-blur-md" ></div>
            <nav className="nav z-20 fixed bottom-0 p-3 h-16 w-full flex flex-row justify-between text-lime-200 bg-violet-950/35 border-t-2 border-lime-400" id="footer">
                <h3 className="self-center">_agustin_m_marrero</h3>
            <div className="nav-content self-center">
                <ul className="nav-items flex flex-row gap-3 items-center">
                    <li className="footer_icon nav-item"><a target="_blank" href="https://www.linkedin.com/in/agustin-m-marrero">
                        <img src="src/assets/icons/square-linkedin.svg" alt="icono de linkedin" width={'30px'} />
                    </a></li>
                    <li className="footer_icon nav-item"><a target="_blank" href="https://github.com/amarrero86mr">
                        <img src="src/assets/icons/square-github.svg" alt="icono de github" width={'30px'} />
                    </a></li>
                </ul>
            </div>
        </nav>
        </div>

    )
}