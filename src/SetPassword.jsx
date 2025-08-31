import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const SetPassword = ({ prevStep, handleChange, handleSubmit, values }) => {
  const [passwordError, setPasswordError] = useState('');

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const validatePassword = (pwd) => {
    let errors = [];
    if (pwd.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(pwd)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(pwd)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(pwd)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[^a-zA-Z0-9\s]/.test(pwd)) {
      errors.push("Password must contain at least one special character.");
    }
    return errors;
  };

  const finalSubmit = (e) => {
    e.preventDefault();

    const pwdErrors = validatePassword(values.password);

    if (pwdErrors.length > 0) {
      setPasswordError(pwdErrors.join(' '));
      return;
    }

    if (values.password !== values.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setPasswordError('');
    handleSubmit(e); // Call the handleSubmit from MultiStepSignup
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
      <form className="bg-base-100 p-8 rounded-lg shadow-md w-full max-w-md z-10" onSubmit={finalSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#52B788]">Set Your Password</h2>
        {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
        <div className="mb-4">
          <label htmlFor="password" className="block text-base-content text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-base-content leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-base-content text-sm font-bold mb-2">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetPassword;
