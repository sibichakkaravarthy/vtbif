import React, { useState } from 'react';
import './Event.css';
import image1 from '../assest/Events/event-1.png';
import image2 from '../assest/Events/event-1_1.png';
import image3 from '../assest/Events/event-2.png';
import image4 from '../assest/Events/event-2_1.png';
import image5 from '../assest/Events/event-2_2.png';
import image6 from '../assest/Events/event-3.png';
import image7 from '../assest/Events/event-4.png';
import image8 from '../assest/Events/event-4_1.png';
import image9 from '../assest/Events/event-5.png';
import image10 from '../assest/Events/event-5_1.png';
import image11 from '../assest/Events/event-5_2.png';
import image12 from '../assest/Events/event-5_3.png';
import image13 from '../assest/Events/event-6.png';
import image14 from '../assest/Events/event-6_1.png';
import image15 from '../assest/Events/event-6_2.png';
import image16 from '../assest/Events/event-6_3.png';
import image17 from '../assest/Events/event-7.png';
import image18 from '../assest/Events/event-7_1.png';
import image19 from '../assest/Events/event-8.png';
import image20 from '../assest/Events/event-8_1.png';
import image21 from '../assest/Events/event-9.png';
import image22 from '../assest/Events/event-9_1.png';
import image23 from '../assest/Events/event-10.png';
import image24 from '../assest/Events/event-10_1.png';
import image25 from '../assest/Events/event-10_2.png';
import image26 from '../assest/Events/event-10_3.png';
import image27 from '../assest/Events/event-10_4.png';
import image28 from '../assest/Events/event-10_5.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const EventsTab = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'IIEC Entrepreneurship Development Programme (EDP) - Workshop',
      image: image1,
      details: "27-01-2022 \n Dr. Y.V.Pavan Kumar,Dr. Alok Kumar Shukla \n 63 \n EDP is aimed to develop entrepreneurial abilities among our students (both engineering and non engineering domains) by inculcating the required skills and knowledge needed for starting and running his/her enterprise. It also addresses various other entrepreneurial needs for establishing successful ventures. Mr. Ravi Eswarapu, The Program Chair, TiE-AP who has more than 15 years of experience in entrepreneurship and incubation took this session on a variety of views and topics.",
      additionalImages: [image2, image1]
    },
    {
      id: 2,
      title: 'IIEC World Entrepreneurs Day Event 2022',
      image: image3,
      details: ' 02-08-2022 \n Dr. Sabeel Basheer \n 40 \n The purpose of World Entrepreneurs Day is to create awareness for innovation, incubation and entrepreneurship among the students and faculty. VITAP University supports the aspirations of young innovators to become successful entrepreneurship through IIEC. Mr. Rajaneesh Vasanta, who is the Founder of ANTAR IoT interacted with the participants and explained the importance of start ups and incubation programs for the development of the nation. He also shared his experiences on how they helped clients on addressing issues. Another session was handled by Mr. Sreeram Raavi, who is the Founder & CEO Eruvaka Technologies. He described the condition of Aqua farming in India and the lack of technological intervention',
      additionalImages: [image4, image5]
    },
    {
      id: 3,
      title: 'IIEC Patent Examination Process - An Emphasis on First Examination Report (FER)',
      image: image6,
      details: "10-09-2022 \n Dr. Ameet Chavan, Dr. Y.V.Pavan Kumar, Dr. Sudha Ellison Mathe \n 20 \n  A meeting convened, on patent examination with glee. The focus of the day, First Examination Reports (FER), To unravel the intricacies, their significance to confer.Scholars and experts gathered, minds sharp and keen, Discussing the process, analyzing each scene. Insights were shared, strategies were debated, To streamline the FER, make the process updated. Ideas sparked, innovation set ablaze, At Vitap University, knowledge led the ways.",
      additionalImages: [image6]
    },
    {
      id: 4,
      title: 'IIEC National Innovation Day - Problem Identification & Idea Evaluation',
      image: image7,
      details: ' 15-10-2022 \n Dr. Anindita Shome \n 58 \n  This session was aimed to develop creative problem identification and design thinking abilities among our students (both engineering and non engineering domains) by inculcating the required skills and knowledge needed for identifying problems and idea evaluation. It also places a special focus on design thinking to think critically and creatively. "Mr. Raman Teja Venigalla, CTO, IBS GLOBAL", who is a successful young entrepreneur and has experience of design thinking, entrepreneurship and incubation took place in this interactive session.',
      additionalImages: [image8, image7]
    },
    {
      id: 5,
      title: 'IIEC National Hackathon 2022',
      image: image9,
      details: "12-11-2022 & 13-11-2022 \n  Dr. Ameet Chavan, Dr. Anupama Namburu, Dr. Sibi Chakaravarthy \n 336+ \n  Our hackathon paved a new way for greater learning and not for competing or just for acquiring certificates. Also the problem statements given to the participants addresses most of the social problems. Many students come from different fields/disciplines/areas of interest, and hence because of such diversity of participants many new and different ideas are born to solve a particular problem. Every single participant adds their input to solve the problem in a very effective manner.",
      additionalImages: [image10, image11,image12]
    },
    {
      id: 6,
      title: 'IIEC My Story - Motivational Session by Successful EntrepreneurStart-up founder',
      image: image13,
      details: '  24-11-2022 \n Prof. Samuel Johnson K \n 96 \n  This Industry guest lecture was organized to make students get to know the real time innovation in the startup called Any Time Diesel ATD. The creativity and problem solving of transportation of Diesel to many organization at their door step was shown with their real time truck brought to the campus.',
      additionalImages: [image14, image15,image16]
    },
    {
      id: 7,
      title: 'IIEC Workshop on Entrepreneruship Skill, attitude and behavior development',
      image: image18,
      details: "02-12-2022 \n Dr. S. Priyanka, Mr. Avin Tiwari \n 80 \n  The VIT-AP University through it s Innovation, Incubation and Entrepreneurship Cell (IIEC) which is a integral part of the Institute s Innovation Council under the Ministry of Education,Government of India, is organizing an Online/Hybrid workshop on Entrepreneurship Skill, Attitude & Behaviour Development, by Ms. Niveda Ravikumar on 02/12/2022 (3:00 PM- 04:00 PM) via Zoom Platform",
      additionalImages: [image17, image18]
    },
    {
      id: 8,
      title: 'IIEC Session/ Workshop on Business Model Canvas (BMC)',
      image: image19,
      details: ' 12.05.2023 \n Prof. Samuel Johnson K \n 26 \n  Prototype exhibition was to show case and get inputs from judges and faculty members and rework and do the improvisation. Last Product Expo Mela is to show case the final design done from waste and recycle and keep it as motto from Product to Market. Students lernt the Design thinking way of working and also learn the challenges of how to have a go to market and getting the business side.',
      additionalImages: [image20, image19]
    },
    {
      id: 9,
      title: 'IIEC Workshop on Intellectual Property Rights (IPRs) and IP management for start-up',
      image: image21,
      details: "15-03-2023 \n Dr. Ananthu S hari, VSL \n 50 \n  The VIT-AP School of Law (VSL) and the Innovation, Incubation and Entrepreneurship Cell (IIEC) of the VIT-AP University jointly organized one day national seminar on the occasion of World Intellectual Property Day in April 26,2023. The conference was organized on the theme Think, Innovate and Protect to raise awareness about the importance of Intellectual Property Rights and its role in promoting innovation and creativity. The Seminar was organized in the context that Intellectual Property has become an indispensable right, with which, every valuable right that could be thought of, is connected, and to that extent it has become an important pillar of progress in today s world.",
      additionalImages: [image22, image21]
    },
    {
      id: 10,
      title: 'IIEC National Science Day',
      image: image23,
      details: ' 28-02-2023 \n IIC & SAS Dept \n 50 \n  School of Advanced Sciences and Innovation, incubation and entrepreneur cell of VIT-AP University jointly organised National Science Day at VIT-AP campus to commemorate the discovery of Raman effect. This event was a great platform for students to showcase their innovative ideas and scientific models to create awareness of Science and Technology and inculcate scientific temper.',
      additionalImages: [image24, image25,image26,image27]
    },
    // Add more events as needed
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <h2 className="events-heading">Events</h2>
      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <button className="view-more-button" onClick={() => openEventDetails(event)}>View More</button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-details-modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeEventDetails}>
              &times;
            </span>
            <h2>{selectedEvent.title}</h2>
            <div className="event-carousel">
              {selectedEvent.additionalImages.length > 1 ? (
                <Carousel>
                  <div className='carousel-image'>
                    <img src={selectedEvent.image} alt={selectedEvent.title} />
                  </div>
                  {selectedEvent.additionalImages.map((imagePath, index) => (
                    <div key={index} className='carousel-image'>
                      <img src={imagePath} alt={`Additional Image ${index + 1}`} />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <img src={selectedEvent.image} alt={selectedEvent.title} />
              )}
            </div>
            <div className="event-details">
              <p><span>Date:</span> {selectedEvent.details.split('\n')[0]}</p>
              <p><span>Event Coordinator:</span> {selectedEvent.details.split('\n')[1]}</p>
              <p><span>Participants:</span> {selectedEvent.details.split('\n')[2]}</p>
              <p>{selectedEvent.details.split('\n')[3]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsTab;
