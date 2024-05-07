// App.js
import React, { useState } from 'react';
import './App.css';
import profilePic from './profile-pic.jpg';
import project1Img from './project1.jpg';
import project2Img from './project2.jpg';
import project3Img from './project3.jpg';
import { useForm, ValidationError } from '@formspree/react';

const App = () => {
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [projectInfo, setProjectInfo] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleProjectClick = (info) => {
    setShowProjectInfo(true);
    setProjectInfo(info);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [state, handleSubmit] = useForm("xwkgyjzp");

  if (state.succeeded) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tyten Vances Portfolio</h1>
        </header>
        <div className="App-content">
          {/* Other sections */}
          <section id="contact" className="section">
            <h2>Contact Me</h2>
            <p>Thank you for your message. I will get back to you as soon as possible.</p>
            <p>Please refresh the page if you want to view my portfolio and submit another form.</p>
          </section>
        </div>
      </div>
    );
  }

  const formSubmission = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      // Handle success state
      console.log("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        comments: ''
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tyten Vances Portfolio</h1>
      </header>
      <div className="App-content">
        <section id="about" className="section">
          <div className="about-info">
            <div className="about-text">
              <h2>Tyten Vance</h2>
              <p>Programmer-Analyst</p>
              <p>Bachelors Degree at Wayne State College</p>
              <p>Major: Computer Information Systems Programmer-Analyst</p>
              <p>Minor: Computer Science</p>
              <p>Fremont, NE 68025</p>
              <p>Phone Number: +1 (402) 720-5058</p>
              <p>Email: <a href="mailto:tytenvance13@outlook.com">tytenvance13@outlook.com</a></p>
            </div>
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
        </section>
        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Python</li>
            <li>CSS</li>
            <li>Cobol</li>
            <li>Microsoft Applications</li>
            <li>Windows Operating System</li>
            <li>Power Shell</li>
            <li>PC building and configuring</li>
          </ul>
        </section>
        <section id="jobs" className="section">
          <h2>Previous Jobs</h2>
          <ul>
            <li>Sprinkler System Installer - Vance Plumbing and Heating</li>
            <li>Fast and Fresh Employee - Hy-Vee</li>
            <li>Crew Member - McDonalds</li>
            <li>Retail Stocker - Bomgaars</li>
          </ul>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects">
            <div className="project" onClick={() => handleProjectClick('Common Community Calendar with form submitting and moderation. Website: https://communitycalendar.vercel.app/ ')}>
              <img src={project1Img} alt="Project 1" />
              <p>Common Community Calendar Web App</p>
            </div>
            <div className="project" onClick={() => handleProjectClick('Wayne Sporting Goods Website that is was a part of an E-Commerce project at Wayne State College. Website: https://waynesporting.vercel.app/')}>
              <img src={project2Img} alt="Project 2" />
              <p>Sporting Goods Template</p>
            </div>
            <div className="project" onClick={() => handleProjectClick('Basic To Do Web App Developed by Tyten Vance')}>
              <img src={project3Img} alt="Project 3" />
              <p>To Do Web App</p>
            </div>
          </div>
          {showProjectInfo && (
            <div className="project-info">
              <p>{projectInfo}</p>
            </div>
          )}
        </section>
        <section id="contact" className="section">
          <h2>Contact Me</h2>
            <p>Please feel free to either email me or message me at my phone number. </p>
            <p>Additionally, this form, when submitted, will be sent to my email and I will be sure to reply to you in a timely manner, thank you.</p>
          <form onSubmit={formSubmission}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
            </label>
            <label>
              Phone Number:
              <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required />
            </label>
            <label>
              Additional Comments:
              <textarea name="comments" value={formData.comments} onChange={handleFormChange}></textarea>
            </label>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default App;
