import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // or 'tsparticles' if you prefer

const PersonalDetails = ({ nextStep, handleChange, values }) => {
    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const continueStep = (e) => {
        e.preventDefault();
        if (values.fname && values.lname) {
            nextStep();
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2F3E46] to-[#415a65] relative overflow-hidden">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#52B788",
                        },
                        links: {
                            color: "#52B788",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-0"
            />
            <form className="bg-base-100 p-8 rounded-lg shadow-md w-full max-w-md z-10" onSubmit={continueStep}>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#52B788]">Personal Details</h2>
                <div className="mb-4">
                    <label htmlFor="fname" className="block text-base-content text-sm font-bold mb-2">First Name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={values.fname}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-base-content leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="lname" className="block text-base-content text-sm font-bold mb-2">Last Name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={values.lname}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-base-content leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary text-[#2F3E46] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    style={{ backgroundColor: '#52B788', borderColor: '#52B788' }}
                >
                    Next
                </button>
            </form>
        </div>
    );
};

export default PersonalDetails;
