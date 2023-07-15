import React, {useState} from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {auth} from './Firebase';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/');

      })
      .catch(error => alert(error.message))
  }
  const register = e =>{
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth){
          navigate('/');
        }

      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to='/' style={{textDecoration:"none"}}>
            <div className="login__logo">
                <StorefrontIcon className="login__logoImage" fontSize="large" />
                <h2 className="login__logoTitle">
                    eShop
                </h2>
            </div>
        </Link>
        <div className="login__container">
          <h1>Sign IN</h1>
          <form action="">
            <h5>Email</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit' className='login__signInButton' onClick={signIn}>Sign in</button>
          </form>
          <p>By signing in you agree to the eshop website condition of use & sale. Please see our privacy Policy, Our cookies notice and our interest-based ads Notice</p>
          <button className='login__registerButton' onClick={register}> Create your eshop Account</button>
            
        </div>

    </div>
  )
}

export default Login