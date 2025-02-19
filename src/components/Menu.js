import { Link } from "react-router-dom";
function Menu(){
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
  <Link className="navbar-brand" to="/">PIZZA_STORE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vehicles">Menu</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/services">AddOrder</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/services">UpdateOrder</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact-us">Contact Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact-us">Footer</Link>
        </li>
   


      </ul>


    </div>
  </div>
</nav>
      </>
    )
  }

  


export default Menu;

