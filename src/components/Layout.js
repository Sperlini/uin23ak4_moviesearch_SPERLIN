export default function Layout(){
    return(
        <div id="container">
        <header>
          <Link to="/">
              <h1>MovieSearch HIOF</h1>
          </Link>
          
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
  
        </footer>
      </div>  
    )
}