import { useState } from 'react';
import axios from 'axios';
import './css/style.css'
import { _userapiurl } from '../api_url';
function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [output, setOutput] = useState('');

  const handlesubmit = () => {
    var userDetails = {
      "name": name,
      "email": email,
      "password": password,
      "mobile": mobile,
      "address": address,
      "city": city,
      "gender": gender
    };

    axios.post(_userapiurl+"save", userDetails).then((response) => {
      setOutput("User Registered Successfully....");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    }).catch((response) => {
      console.log(response)
      setOutput("Registration failed....");
    });
  };

  return (
    <>
      {/* content Start */}
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div className="col-lg-12 py-6 px-5 off-white-background">
            <h1 className="display-5 mb-4">Register <span className="text-primary">Here!!!</span></h1>
            <font color="white">{output}</font>
            <form action="/action_page.php">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea rows="5" className="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <select className="form-control" value={city} onChange={e => setCity(e.target.value)}>
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Dewas</option>
                  <option>Ujjain</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="gender">Gender :</label>
                &nbsp;&nbsp;
                Male <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} />
                &nbsp;&nbsp;
                Female <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
              </div>
              <br />
              <button type="button" onClick={handlesubmit} className="btn btn-danger">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* content End */}
    </>
  );
}

export default Register;
