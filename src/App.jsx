import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container">
      <Header name="Travis Lau" />
      <Experience
        company="DAB Technology Sdn Bhd"
        position="Project Engineer"
        dateRange="Jun. 2022 - Present"
        duties={[
          'Set up new department for company - Production Assembly / Quality Control Department.',
          'Set up basic production work flow, product assembly, test and commissioning S.O.P.',
          'Perform Quality Control Product',
          'Product R&D',
          'Ensure product deliver to customer on time, liaise closely with sales person.',
          'Manpower arrangement, assist supervise site project & after sales service of Robotic Arm OEM Finger Teaching / End Effector / mechanical components repair & installation progress.'
        ]}
      />
      <Experience
        company="Archi Metal Sdn Bhd"
        position="Senior Project Coordinator"
        dateRange="Apr. 2018 - May. 2022"
        duties={[
          'Ensure awarded façade in aluminum, steel and glazing sub-contracted construction projects complete without any delay.',
          'Set up work program including time frame, planning & breakdown details for entire project.',
          'Coordinate with construction site representatives to troubleshoot and resolve all different kind of site issues.',
          'Supervise and monitor all site pending / on-going activities.',
          'Joint weekly meeting with main contractors & developers to follow up / update site progress.'
        ]}
      />
      <Experience
      company="Sepang Aircraft Engineering Sdn Bhd"
      position="Aircraft Engineering Trainee"
      dateRange="Jan. 2018 - Apr. 2018"
      duties={[
        'Assist & follow LAE, aircraft technicians instructions to perform aircraft C-check / Overhaul'
      ]}
    />
     <Experience
      company="TransAsia Airways"
      position="Aircraft Engineering Intern"
      dateRange="Jun. 2014 - Jul. 2015"
      duties={[
        'Packing unserviceable parts of aircraft and send back to its own manufacturer for repair/calibration, or exchange a brand new part.',
        'Assign special tools and equipment such as Precision Measurement Equipment (PME) and Non-Calibration Required Tools(NCR) to Line/Base Maintenance department to assist mechanic repair aircraft.'
      ]}
    />
      <Education
        degree="Bachelor of Engineering in Aircraft Mechanical"
        institution="China University of Science and Technology"
        year="2015"
        certifications={['EASA Part 147 B1.1 Gas Turbine Engine']}
      />
      <Skills
        technicalSkills={[
          'HTML5',
          'CSS3',
          'JavaScript',
          'React.js',
          'Redux',
          'Node.js',
          'Express.js',
          'API',
          'SQL',
          'Firebase',
          'Firestore',
          'CI/CD',
          'Aircraft Maintenance',
          'Project Management'
        ]}
        languages={['English', 'Mandarin', 'Malay', 'Cantonese']}
      />
    </div>
  );
};

const Header = ({ name }) => (
  <header className="resume-header">
    <h1>{name}</h1>
  </header>
);

const Experience = ({ company, position, dateRange, duties }) => (
  <section className="resume-experience">
    <h2>{company}</h2>
    <h3>
      {position} <span>{dateRange}</span>
    </h3>
    <ul>
      {duties.map((duty, index) => (
        <li key={index}>{duty}</li>
      ))}
    </ul>
  </section>
);

const Education = ({ degree, institution, year, certifications }) => (
  <section className="resume-education">
    <h2>Academic Credentials</h2>
    <p>
      {degree}, {institution}, {year}
    </p>
    <h3>Certifications</h3>
    <ul>
      {certifications.map((certification, index) => (
        <li key={index}>{certification}</li>
      ))}
    </ul>
  </section>
);

const Skills = ({ technicalSkills, languages }) => (
  <section className="resume-skills">
    <h2>Technical Skills</h2>
    <ul>
      {technicalSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <h2>Languages Known</h2>
    <p>{languages.join(', ')}</p>
  </section>
);

export default Resume;