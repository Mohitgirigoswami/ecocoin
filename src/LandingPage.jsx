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
            <a href="/" className="btn btn-ghost p-0 hover:bg-transparent">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/IMG_20250831_132922.png.png" 
                    alt="EcoCoin Logo" 
                    className="h-full w-auto object-cover" 
                    style={{ filter: 'drop-shadow(0 0 6px #52B788)' }} 
                  />
                </div>
                <span className="ml-3 text-2xl font-bold" style={{ color: '#52B788' }}>EcoCoin</span>
              </div>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* Links removed as per request */}
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
              <h1 className="mb-5 text-4xl md:text-6xl lg:text-7xl font-bold text-white">Welcome to EcoCoin</h1>
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
              <li className="step step-primary" style={{ '--p-bg': '#52b788', '--p-text': 'white' }}>
                <div className="text-left p-4"><strong>Create an Account</strong><br/>Sign up for free in minutes.</div>
              </li>
              <li className="step step-primary" style={{ '--p-bg': '#52B788', '--p-text': 'white' }}>
                <div className="text-left p-4"><strong>Complete Eco-Tasks</strong><br/>Choose from a list of simple, green tasks.</div>
              </li>
              <li className="step step-primary" style={{ '--p-bg': '#52B788', '--p-text': 'white' }}>
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
      <footer className="footer p-10 text-white" style={{ backgroundColor: '#2F3E46' }}>
        <aside>
          <p className="text-2xl font-bold" style={{ color: '#52B788' }}>EcoCoin</p>
          <p>Making the world a greener place, one coin at a time.<br/>&copy; 2025 EcoCoin. All Rights Reserved.</p>
        </aside> 
        <nav>
          <h6 className="footer-title">Contact Us</h6> 
          <a className="link link-hover">Email: contact@ecocoin.com</a>
          <a className="link link-hover">Phone: +1 (123) 456-7890</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Links</h6> 
          <a href="#features" className="link link-hover">Features</a>
          <a href="#how-it-works" className="link link-hover">How It Works</a>
          <a href="#testimonials" className="link link-hover">Testimonials</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Social</h6> 
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.435-9.884-9.888-9.884-5.448 0-9.886 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52s-.669-1.611-.916-2.206c-.242-.579-.487-.5-.669-.51s-.371-.012-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg></a>
          </div>
        </nav>
      </footer>
    </div>);}

export default LandingPage;