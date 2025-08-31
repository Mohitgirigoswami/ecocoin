import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Demographics = ({ nextStep, prevStep, handleChange, values }) => {
    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const continueStep = (e) => {
        e.preventDefault();
        if (values.gender && values.dob) {
            nextStep();
        } else {
            alert("Please fill in all fields.");
        }
    };

    const back = (e) => {
        e.preventDefault();
        prevStep();
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
                <h2 className="text-2xl font-bold mb-6 text-center text-[#52B788]">Demographic Information</h2>
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-base-content text-sm font-bold mb-2">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-base-content leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="dob" className="block text-base-content text-sm font-bold mb-2">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-base-content leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={back}
                        className="btn bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary text-[#2F3E46] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        style={{ backgroundColor: '#52B788', borderColor: '#52B788' }}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Demographics;
