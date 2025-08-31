import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/landing');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2F3E46] to-[#415a65] relative overflow-hidden">
            <Particles
                id="tsparticles-login"
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
            <form className="bg-base-100 p-8 rounded-lg shadow-md w-full max-w-md z-10" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#52B788]">Login</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-base-content text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-base-content leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-base-content text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-base-content leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary text-[#2F3E46] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    style={{ backgroundColor: '#52B788', borderColor: '#52B788' }}
                >
                    Login
                </button>
                <p className="text-center text-base-content text-sm mt-4">
                    Don't have an account? <Link to="/signup" className="text-[#52B788] hover:underline">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;