import { Link } from 'react-router-dom';
import "./css/style.css"
export default function Nav2(){ 
    return(<>
<nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
    </Link>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/home" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/course" className="nav-item nav-link">Courses</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
            <Link to="/register" className="nav-item nav-link">Register</Link>
            <Link to="/login" className="nav-item nav-link">Login</Link>
            <div className="nav-item dropdown">
               
            </div>
         
        </div>
        <Link to="/" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></Link>
    </div>
</nav>
</>)}