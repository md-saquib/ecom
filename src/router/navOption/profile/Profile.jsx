import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userInfo } from '../../authContext/AuthContext';
import './profile.css'; // Import the CSS file for styling

const Profile = () => {
  const navigate = useNavigate()
  const login = useContext(userInfo)
  return (
    <div className="profile">
      
      <image src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="Profile Picture" className="profile-picture" />
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-bio">Frontend Developer</p>
      <ul className="profile-details">
        <li><strong>Email:</strong> johndoe@example.com</li>
        <li><strong>Location:</strong> New York, USA</li>
        <li><strong>Website:</strong> www.johndoe.com</li>
      </ul>
      <button className='btn btn-secondary ' onClick={() => {
        if (login.loginInfo.userName) {
          login.setLoginInfo({
            userName: '',
            password: '',
            conformPassword: ''
          })
          navigate('/login')
        }
      }}>Log-Out</button>
    </div>
  );
}

export default Profile;

