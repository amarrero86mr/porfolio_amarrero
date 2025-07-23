


export const Navbar = (prop:{
  handleTheme(): void
}) => {

  return (
    <div>
    <div className="z-10 fixed top-0 p-3 h-16 w-full backdrop-blur-md" > </div>
    <nav className="nav z-20 fixed top-0 p-3 h-16 w-full flex flex-row justify-between text-lime-200 bg-violet-950/35 border-b-2 border-lime-400"
      id="navbar">
      <h3 className="self-center">_agustin_m_marrero</h3>
      <div className="nav-content self-center">
        <ul className="nav-items flex flex-row gap-3 items-center">
          <li><button onClick={()=> prop.handleTheme()}>☀🌙</button></li>
          <li className="nav-item p-1 hover:text-lime-400 hover:bg-violet-950/45 border-0 rounded-md">HOME</li>
          <li className="nav-item p-1 hover:text-lime-400 hover:bg-violet-950/45 border-0 rounded-md">ABOUT_ME</li>
          <li className="nav-item p-1 hover:text-lime-400 hover:bg-violet-950/45 border-0 rounded-md">SKILLs</li>
          <li className="nav-item p-1 hover:text-lime-400 hover:bg-violet-950/45 border-0 rounded-md">PROJECTs</li>
          <li className="nav-item p-1 hover:text-lime-400 hover:bg-violet-950/45 border-0 rounded-md">CERTIFICATEs</li>
          <li className="nav-item p-1 hover:text-lime-400 hover:bg-violet-950/45 border-0 rounded-md" >CONTACT</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}