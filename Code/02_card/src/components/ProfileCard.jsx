import React from 'react'

const ProfileCard = () => {
    return (
    <div className="card">
        <div className="top">
          <h2>My Profile</h2>
          <p>Java Backend Developer</p>
        </div>
        <div className="profile-container">
            <img src="https://images.unsplash.com/photo-1793060519948-ae794d869501?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Profile" />
        </div>
      <button className="btn">View Profile</button>
    </div>
  );
}

export default ProfileCard