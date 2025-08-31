import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Demographics from './Demographics';
import ContactDetails from './ContactDetails';
import SetPassword from './SetPassword';
import { useNavigate } from 'react-router-dom';

const MultiStepSignup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        gender: '',
        dob: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // This is where the final signup logic will go
        console.log('Form Data Submitted:', formData);
        // Placeholder for actual API call
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
            }

            const data = await response.json();
            console.log('Signup successful:', data);
            alert('Signup successful!');
            navigate('/login'); // Redirect to login after successful signup
        } catch (err) {
            alert(`Signup failed: ${err.message}`);
        }
    };

    switch (step) {
        case 1:
            return (
                <PersonalDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formData}
                />
            );
        case 2:
            return (
                <Demographics
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={formData}
                />
            );
        case 3:
            return (
                <ContactDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={formData}
                />
            );
        case 4:
            return (
                <SetPassword
                    prevStep={prevStep}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={formData}
                />
            );
        default:
            return <div>Something went wrong.</div>;
    }
};

export default MultiStepSignup;
