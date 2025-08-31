import React from 'react';

// Using the "Earthy & Premium" color palette
// Primary: #2F3E46 (Dark Slate Gray)
// Secondary: #E0E0E0 (Light Gray)
// Accent: #52B788 (Mint Green)

const LandingPage = () => {
  return (
    <div className="bg-base-200">
      {/* Header */}
      <header style={{ backgroundColor: '#2F3E46' }} className="shadow-md sticky top-0 z-50">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-bold" style={{ color: '#52B788' }}>EcoCoin</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#features" className="text-white hover:text-[#52B788]">Features</a></li>
              <li><a href="#how-it-works" className="text-white hover:text-[#52B788]">How It Works</a></li>
              <li><a href="#testimonials" className="text-white hover:text-[#52B788]">Testimonials</a></li>
            </ul>
          </div>
          <div className="navbar-end">
             <a 
                className="btn text-[#2F3E46] font-bold"
                style={{ backgroundColor: '#52B788', borderColor: '#52B788' }}
              >
                Get Started
              </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>

        {/* Hero Section */}
        <section className="hero min-h-[60vh]" style={{ backgroundColor: '#2F3E46' }}>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold text-white">Welcome to EcoCoin</h1>
              <p className="mb-5 text-lg" style={{ color: '#E0E0E0' }}>The digital currency that rewards you for making a difference.</p>
              <button 
                className="btn btn-primary border-none text-[#2F3E46] font-bold"
                style={{ backgroundColor: '#52B788' }}
              >
                Join the Movement
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-base-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-base-content">Why Choose EcoCoin?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl text-gray-800 dark:text-gray-200">Blockchain Powered</h3>
                  <p className="text-gray-700 dark:text-gray-300">Built on secure and transparent blockchain technology, ensuring every transaction is safe and traceable.</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl text-gray-800 dark:text-gray-200">Earn Rewards</h3>
                  <p className="text-gray-700 dark:text-gray-300">Complete eco-friendly tasks within the app to earn EcoCoins and grow your digital wallet.</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl text-gray-800 dark:text-gray-200">Spend & Exchange</h3>
                  <p className="text-gray-700 dark:text-gray-300">Use your EcoCoins for payments on partner websites or exchange them with other users seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-base-content">Get Started in 3 Easy Steps</h2>
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-primary" style={{ '--p-bg': '#52B788', '--p-text': '#2F3E46' }}>
                <div className="text-left p-4"><strong>Create an Account</strong><br/>Sign up for free in minutes.</div>
              </li>
              <li className="step step-primary" style={{ '--p-bg': '#52B788', '--p-text': '#2F3E46' }}>
                <div className="text-left p-4"><strong>Complete Eco-Tasks</strong><br/>Choose from a list of simple, green tasks.</div>
              </li>
              <li className="step step-primary" style={{ '--p-bg': '#52B788', '--p-text': '#2F3E46' }}>
                <div className="text-left p-4"><strong>Earn & Spend</strong><br/>Get EcoCoins and use them with our partners.</div>
              </li>
            </ul>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-base-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-base-content">What Our Users Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <p className="text-base-content">"I love being able to earn rewards for things I already do to help the environment. EcoCoin is a fantastic concept!"</p>
                  <div className="card-title mt-4 text-lg font-bold text-accent" style={{ color: '#52B788' }}>- Sarah J.</div>
                </div>
              </div>
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <p className="text-base-content">"The app is so easy to use, and it's great to see my EcoCoin balance grow. Highly recommend it to everyone."</p>
                  <div className="card-title mt-4 text-lg font-bold text-accent" style={{ color: '#52B788' }}>- Mike R.</div>
                </div>
              </div>
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <p className="text-base-content">"Finally, a crypto project that has a real-world positive impact. It feels good to be a part of the EcoCoin community."</p>
                  <div className="card-title mt-4 text-lg font-bold text-accent" style={{ color: '#52B788' }}>- Alex P.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-base-content">Ready to Make a Difference?</h2>
            <p className="text-lg mb-8 text-base-content">Join the EcoCoin community today and start earning rewards for your positive impact.</p>
            <button 
              className="btn btn-primary btn-lg border-none text-[#2F3E46] font-bold"
              style={{ backgroundColor: '#52B788' }}
            >
              Sign Up Now
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer footer-center p-4 text-base-content" style={{ backgroundColor: '#2F3E46' }}>
        <aside>
          <p className="text-white">&copy; 2025 EcoCoin. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>);}

export default LandingPage;