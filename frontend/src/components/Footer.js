import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css'
import img1 from "./img/course-1.jpg";
import img2 from "./img/course-2.jpg";
import img3 from "./img/course-3.jpg";
import img4 from "./img/course-3.jpg";
import img5 from "./img/course-3.jpg";
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Quick Link</h4>
            <Link className="btn btn-link" to="/about" id="flink">About Us</Link>
            <Link className="btn btn-link" to="/contact"  id="flink">Contact Us</Link>
            <Link className="btn btn-link" to="/"  id="flink">Privacy Policy</Link>
            <Link className="btn btn-link" to="/"  id="flink">Terms & Condition</Link>
            <Link className="btn btn-link" to="/"  id="flink">FAQs & Help</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Vijay Nagar, Indore</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 1111111111</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={img1} alt="none" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={img2} alt="none" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={img3} alt="none" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={img4} alt="none" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={img5} alt="none" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={img1} alt="none" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom" to="#">Profile Maker</Link>, All Right Reserved.

              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
              Designed By <a className="border-bottom" href="/">Dhruv</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/home">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
