import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'; 

function Signout({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false); // Set isAuthenticated to false
    navigate('/'); // Redirect to the sign-in page after signing out
  };

  return (
    <div className='signout-container'>
      <h2>Signing Out</h2>
      <br/>

      <FontAwesomeIcon icon={faRightFromBracket} size='2x' beatFade />
      <br/>
      <br/>

      <p>Are you sure you want to sign out?</p>
      <br/> 
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
}
export default Signout;