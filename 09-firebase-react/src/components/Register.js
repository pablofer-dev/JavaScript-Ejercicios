import { useState } from 'react';
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
export function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user.email, user.password);
      navigate('/');
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/internal-error).' || error.message === 'Firebase: Error (auth/invalid-email).' || error.message === 'Firebase: Error (auth/missing-email).') {
        setError('Invalid email or password');
      }
      else {
        setError(error.message);
      }
    }
  }

  return (
    <div>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="yourcompany@email.com" name="email" id="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        <button>Register</button>
      </form>
    </div>
  )
}
