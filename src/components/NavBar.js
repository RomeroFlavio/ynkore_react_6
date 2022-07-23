import logo from '../images/logo/ynkore_logo.png';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        
    <div className="container-fluid">
        <nav className="navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between color">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="App-logo logo" alt="logo" />
                    </a>
                </div>
                
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quienes somos</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </div>

    );
  }
export default NavBar;