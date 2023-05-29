import React from 'react';
import './team.css'
const Team = () => {
  return (
    <section id="team" className="team">
      <h4 className="heading">TEAM</h4>
      <div className="row">
        {/* Card 1 */}
        <div className="card">
          <div className="image">
            <img src="Images/amet.jpg " alt="" />
          </div>
          <div className="info">
            <h3>Dr.Ameet Chavan</h3>
            <span>Director of Vtbif  </span>
          
          </div>
        </div>
        {/* card2 */}
        <div className="card">
          <div className="image">
            <img src="Images/sudha.jpeg" alt="" />
          </div>
          <div className="info">
            <h3>Dr.Sudha Ellison Mathe</h3>
            <span> VLSI Architectures, FPGA Design, Digital IC Design</span>
          
          </div>
        </div>

    
        {/* Card 3 */}
        <div className="card">
          <div className="image">
            <img src="Images/sb.jpeg" alt="" />
          </div>
          <div className="info">
            <h3>S. Sibi Chakkaravarthy</h3>
            <span>Cyber Security</span>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
