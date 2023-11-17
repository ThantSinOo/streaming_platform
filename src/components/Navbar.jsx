import '../style/navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
  return(
    <>
      <nav>
        <div className='gwglogo'>
          <img src='https://bannerimgbucket.s3.ap-northeast-1.amazonaws.com/logo+copy.png' width={50} height={50} />
         <span className='logoText'> oWatchGo</span>
        </div>
        <div className='nav-items'> 
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Anime Series</a></li>
          <li><a href='#'>Movies</a></li>
          <li><a href='#'>Manga<sup className='supText'>Coming Soon</sup></a></li>
          <li><a href='#'>Light Novel<sup className='supText'>Coming Soon</sup></a></li>
        </div>
        <form>
          <input type='search' className='searchData' placeholder='Search' required></input>
          <button>Search</button>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
