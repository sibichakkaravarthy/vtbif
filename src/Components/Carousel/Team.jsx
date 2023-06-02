import React from 'react';
import './team.css';

const TeamSection = () => {
  return (
    <div id="team" className="team">
      <h4 className="headings">TEAM</h4>
        <div className='m'>
      <div className="row">
        {/* Card 1 */}
        <div className="teamcard">
          <div className="image">
            <img src="Images/amet.jpg" alt="" />
          </div>
          <div className="info">
            <h3 className="u">Dr.Ameet Chavan</h3>
            <span className="r">Director of Vtbif</span>
          </div>
        </div>
        {/* card2 */}
        <div className="teamcard">
          <div className="image">
            <img src="Images/sudha.jpeg" alt="" />
          </div>
          <div className="info">
            <h3 className="u">Dr.Sudha Ellison Mathe</h3>
            <span className="r">VLSI Architectures, FPGA Design, Digital IC Design</span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="teamcard">
          <div className="image">
            <img src="Images/sb.jpeg" alt="" />
          </div>
          <div className="info">
            <h3 className="u">S. Sibi Chakkaravarthy</h3>
            <span className="r">Cyber Security</span>
          </div>
        </div>
          </div>
      </div>
    </div>
  );
};

export default TeamSection;
