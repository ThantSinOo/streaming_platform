import '../style/navbar.css'
import { Outlet, NavLink } from "react-router-dom"

function RootLayout() {
  return (
    <div>
       <header>
       <nav>
        <div className='gwglogo'>
          <img src='https://bannerimgbucket.s3.ap-northeast-1.amazonaws.com/logo+copy.png' width={50} height={50} />
         <span className='logoText'> oWatchGo</span>
        </div>
        <div className='nav-items'>
          <NavLink to={'/'} className='navlink'>Home</NavLink>
          <NavLink to={'animeseries'} className='navlink'>Anime Series</NavLink>
          <NavLink to={'animemovies'} className='navlink'>Anime Movies</NavLink>
          <NavLink to={'manga'} className='navlink'>Manga<sup className='supText'>Coming Soon</sup></NavLink>
          <NavLink to={'lightnovel'} className='navlink'>Light Novel<sup className='supText'>Coming Soon</sup></NavLink>
          {/* <li><a href='#'>Home</a></li>
          <li><a href='#'>Anime Series</a></li>
          <li><a href='#'>Movies</a></li>
          <li><a href='#'>Manga<sup className='supText'>Coming Soon</sup></a></li>
          <li><a href='#'>Light Novel<sup className='supText'>Coming Soon</sup></a></li> */}
        </div>
        <form>
          <input type='search' className='searchData' placeholder='Search' required></input>
          <button>Search</button>
        </form>
      </nav>
       </header>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
  )
}

export default RootLayout