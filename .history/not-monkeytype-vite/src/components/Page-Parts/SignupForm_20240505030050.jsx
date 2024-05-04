import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/Login.css';
import ErrorCard from './ErrorCard'; // Import ErrorCard component

const SignupForm = () => {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    try {
      const url = "https://localhost:8080/api/users";
      const response = await axios.post(url, data);
      console.log(response.data.message);
      navigate("/Home");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const handleCloseError = () => {
    setError("");
  };

  
const SignupForm = () => {
  return (
    <form action="#" className="signup">
      <div className="name-fields">
        <div className="field">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input type="text" placeholder="First Name" required />
        </div>
        <div className="field">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input type="text" placeholder="Last Name" required />
        </div>
      </div>
      <div className="field">
        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
        <input type="text" placeholder="Email Address" required />
      </div>
      <div className="name-fields">
        <div className="field">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input type="password" placeholder="Confirm password" required />
        </div>
      </div>
      <div className="field btn">
        <div className="btn-layer"></div>
        <input type="submit" value="Signup" />
      </div>
    </form>
  );
};

export default SignupForm;