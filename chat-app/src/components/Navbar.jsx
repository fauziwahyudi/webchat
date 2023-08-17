import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import logoImage from "../assets/logo2.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <img className="logo" style={{width: "120px"}} src={logoImage} alt="Logo" />
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>

        <button onClick={() => signOut(auth)}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </div>
  )
}

export default Navbar
