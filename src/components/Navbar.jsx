import navbar from '../style/navbar.css'
export default function Navbar(){
    return(
        <>
           <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src='./gwglogo.png' alt='logo' height={100} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Anime Series</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Movies</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
};