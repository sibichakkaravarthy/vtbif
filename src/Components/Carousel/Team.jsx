import React from "react";
import "./team.css";

const Team = () => {
  const committeeMembers = [
    {
      role: "Chairman",
      name: "Dr. G. Viswanathan,",
      position: "Chancellor VIT Group",
    },
    {
      role: "Vice Chairman",
      name: "Sankar Viswanathan, Sekar Viswanathan, Selvam Viswanathan",
      position: "VP, VIT",
    },
    {
      role: "Treasurer",
      name: "Dr S V Kota Reddy",
      position: "Vice Chancellor ",
    },
    { role: "Member", name: "Director 1", position: "VTBIF" },
    { role: "Member", name: " Director 2", position: "VTBIF, Director 1" },
    { role: "Member", name: " Registrar", position: "VIT-AP University" },
    {
      role: "Member Secretary",
      name: " Director 2",
      position: "Director IIEC",
    },
    {
      role: "Member-Central Govt. Institute",
      name: " Dr. Mukesh Tripati",
      position: "Director & CEO AIIMS Mangalagiri, AP",
    },
    {
      role: "Member Govt of AP",
      name: " Mr. Anil Kumar Tentu CEO",
      position: "AP Innovation Society (APIS), Govt. of Andhra Pradesh",
    },
    {
      role: "Member-Angel investor",
      name: " Mr. Bhanu Prakash- Angel Investor",
      position: "Partner & Director-Plural Technology Pvt. Ltd.",
    },
    {
      role: "Member-VIT Group",
      name: " Dr. Balachandran ",
      position: "A-VIT TBI incubation Centre",
    },
    {
      role: "Member-Industry Expert",
      name: " Mr. Sridhar Kosaraju",
      position: " Founder & CEO@Nimaisoft | Chairman DeepTech & Naipunya Former State President@ITAAP | Al Evangelist | Angel Investor | Mentor",
    },
    {
      role: "Member-Ecosystem",
      name: " Mr. Ravi Eswarapu - TIEAP President)",
      position: "CEO HUB (Athra University)",
    },
    {
      role: "Member",
      name: "  ",
      position: "Deputy Director IEC",
    },
    {
      role: "Member",
      name: " ",
      position: "CFO",
    },
  ];
  return (
    <div id="team" className="team">
  <div className="advisory-committee">
            <h2>VTBIF Proposed Advisory Committee</h2>
            <ul>
                {committeeMembers.map((member, index) => (
                    <li key={index}>
                        <strong>{member.role}:</strong> {member.name}{" "}
                        {member.position && <span className="position">({member.position})</span>}
                    </li>
                ))}
            </ul>
        </div>
      <h4 className="headings">TEAM</h4>
      <div className="m">
        <div className="row">
          {/* Card 1 */}
          <div className="teamcard">
            <div className="image">
              <img src="Images/ameet.jpeg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Ameet Chavan</h3>
              <span className="r">Director of Vtbif</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="teamcard">
            <div className="image">
              <img src="Images/sudha.jpeg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Sudha Ellison Mathe</h3>
            </div>
          </div>
          <div className="teamcard">
            <div className="image">
              <img src="Images/ravi.jpg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. M Ravindra</h3>
              <span className="r"></span>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="teamcard">
            <div className="image">
              <img src="Images/sb.jpeg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">S. Sibi Chakkaravarthy</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/sam.jpg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Prof. Samuel Johnson</h3>
            </div>
          </div>
          <div className="teamcard">
            <div className="image">
              <img src="Images/sira.jpg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Y Md. Sirajudeen</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/pri.jpg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. S. Priyanka</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/ani.jpg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Anindita Shome</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/ana.jpg" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Prof. Ananthu S. Hari</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/Sab.png" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Sabeel Basheer</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/azad.png" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Abdul Kalam Azad</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/avin.png" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Prof. Avin Tiwari</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/deep.png" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Deepjoy Katuwal</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/kupp.png" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Kuppusamy P</h3>
            </div>
          </div>

          <div className="teamcard">
            <div className="image">
              <img src="Images/renu.png" alt="" />
            </div>
            <div className="info">
              <h3 className="u">Dr. Renuprasad Patki</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
