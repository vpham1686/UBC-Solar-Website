import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import Footer from '../Footer'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {
  LoginContainer
} from './LoginStyle';


function LoginPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  // Toggle sidebar
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Log in function
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      const encryptedKey = CryptoJS.AES.encrypt(codeResponse.access_token, process.env.REACT_APP_CRYPTOJS_SECRET_KEY).toString();
      console.log('Login Success 2:', codeResponse);
      localStorage.setItem('user', JSON.stringify({ access_token: encryptedKey }));
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  // Log out function
  const logOut = () => {
    localStorage.removeItem('user');
    googleLogout();
    setProfile(null);
  };

  // Check if user is logged in
  useEffect(() => {
    if (localStorage.user) {
      const accessToken = JSON.parse(localStorage.getItem('user'));
      const decryptedKey = CryptoJS.AES.decrypt(accessToken.access_token, process.env.REACT_APP_CRYPTOJS_SECRET_KEY).toString(CryptoJS.enc.Utf8);

      setUser({ access_token: decryptedKey });
    } 
  }, []);

  // Gets user profile
  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            console.log(res.data)
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  return (
    <>
      <NavigationBar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <>
        <LoginContainer>
          <br />
          <br />
          <h1>Login Page</h1>
          <br />
          <br />
          <br />
          <br />
          {profile ? (
            <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
            </div>
          ) : (
            <button onClick={() => login()}>Sign in with Google</button>
          )}
        </LoginContainer>
      </>
      <Footer />
    </>
  )
}

export default LoginPage