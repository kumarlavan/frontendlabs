import React from "react";
import "./Team.css"; // Ensure this contains spacing fixes
import abhijeetimg from "../../assets/images/abhijeetimg.jpeg";
import laxmiimg from "../../assets/images/laxmiimg.jpeg";
import snigdhaimg from "../../assets/images/snigdhaimg.jpeg";
import jaybabuimg from "../../assets/images/Jaybabuimg.jpeg";
import abhilipsaimg from "../../assets/images/Abhilipsaimg.jpeg";
import sumanimg from "../../assets/images/sumanimg.jpeg";
import gauravimg from "../../assets/images/gauravimg.jpeg";

const teamMembers = [
  { name: "Laxmipriya Ojha", img: laxmiimg },
  { name: "Snigdha Panda", img: snigdhaimg },
  { name: "Jaybabu Sharma", img: jaybabuimg },
  { name: "Avilipsa Senapati", img: abhilipsaimg },
  { name: "Smurnarani Balmuch", img: sumanimg },
  { name: "Gaurav Maharana", img: gauravimg },
  { 
    name: "Biswajit Sahu", 
    img: "https://media.licdn.com/dms/image/v2/D5603AQEzIVpnvglnaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723961314666?e=1745452800&v=beta&t=bSJ3f4d6tMr5tMPYpvJXdpsGjm5jj5BO_Vpb7YzliD8" 
  },
];

const Team = () => {
  return (
    <div className="container text-center py-4">
      <h1 className="mb-4 text-secondary">Meet Our Teams</h1>

      {/* Team Lead */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4">
          <div className="card team-card p-3 text-center">
            <img src={abhijeetimg} alt="Abhijeet Gouda - Team Lead" className="team-photo mx-auto rounded-circle" />
            <h5 className="mt-3">Abhijeet Gouda</h5>
            <h5 className="role text-primary">Team Lead</h5>
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div className="row g-4 justify-content-center"> 
        <h3 className="mb-3 w-100">Developers</h3>
        {teamMembers.map((member, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card team-card p-3 text-center">
              <img src={member.img} alt={`Developer`} className="team-photo mx-auto rounded-circle" />
              <h5 className="mt-3">{member.name}</h5>
              <h5 className="mt-3 text-primary">Developer</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

