import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Layout(){
    return(
        <div id="container">
        <header>
          <Link to="/">
              <h1 className="logo">MovieSearch HIOF</h1>
          </Link>
          
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="styleFooter">
            <p>UIN Arbeidskrav 4 </p>
            <p>Alexander Sperlin 2023 </p>
            <p>Kontakt oss: Alexasp@hiof.no</p>
        </footer>
      </div>  
    )
}