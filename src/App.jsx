import { useState } from 'react';
import GeneralForm from './components/GeneralForm.jsx';
import EducationForm from './components/EducationForm.jsx';
import ExperienceForm from './components/ExperienceForm.jsx';

function App() {
    const [fullName, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const numberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const emailChange = (event) => {
        setEmail(event.target.value);
    };

    const addEducation = (newEducation) => {
        setEducation([...education, newEducation]);
    };

    const removeEducation = (index) => {
        setEducation(prevEducation => prevEducation.filter((edu, i) => i !== index));
    }

    const addExperience = (newExperience) => {
        setExperience([...experience, newExperience]);
    }

    const removeExperience = (index) => {
        setExperience(prevExperience => prevExperience.filter((exp, i) => i !== index));
    }

    return (
        <>
            <GeneralForm 
                onNameChange={nameChange} 
                onNumberChange={numberChange} 
                onEmailChange={emailChange} 
            />
            <EducationForm 
                onEducationAdd={addEducation}
                currentList={education}
                remove={removeEducation}
            />
            <ExperienceForm 
                onExperienceAdd={addExperience}
                currentList={experience}
                remove={removeExperience}
            />
            <div className="cv">
                <h1>General Info</h1>
                <p>{fullName}</p>
                <p>{phoneNumber}</p>
                <p>{email}</p>
                <h1>Education</h1>
                <ul>
                    {education.map((edu, index) => (
                        <li key={index}>
                            {edu.schoolName}, {edu.titleOfStudy}, {edu.startDate}-{edu.endDate}
                        </li>
                    ))}
                </ul>
                <h1>Experience</h1>
                <ul>
                    {experience.map((exp, index) => (
                        <li key={index}>
                            {exp.company}, {exp.position}, {exp.duties}, {exp.start}-{exp.end}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
