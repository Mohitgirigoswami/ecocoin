import React from 'react';

// Using the "Earthy & Premium" color palette
// Primary: #2F3E46 (Dark Slate Gray)
// Secondary: #E0E0E0 (Light Gray)
// Accent: #52B788 (Mint Green)

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#E0E0E0' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#2F3E46' }} className="shadow-md">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <a className="btn btn-ghost text-2xl font-bold" style={{ color: '#52B788' }}>EcoCoin</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#features" className="text-white hover:text-[#52B788]">Features</a></li>
              <li><a href="#about" className="text-white hover:text-[#52B788]">About</a></li>
              <li>
                <a 
                  className="btn ml-4 text-[#2F3E46] font-bold"
                  style={{ backgroundColor: '#52B788', borderColor: '#52B788' }}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="hero min-h-[60vh]" style={{ backgroundColor: '#2F3E46' }}>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
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
        </div>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12" style={{ color: '#2F3E46' }}>Why Choose EcoCoin?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl" style={{ color: '#2F3E46' }}>Blockchain Powered</h3>
                  <p className="text-gray-600">Built on secure and transparent blockchain technology, ensuring every transaction is safe and traceable.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl" style={{ color: '#2F3E46' }}>Earn Rewards</h3>
                  <p className="text-gray-600">Complete eco-friendly tasks within the app to earn EcoCoins and grow your digital wallet.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl" style={{ color: '#2F3E46' }}>Spend & Exchange</h3>
                  <p className="text-gray-600">Use your EcoCoins for payments on partner websites or exchange them with other users seamlessly.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-4 text-base-content" style={{ backgroundColor: '#2F3E46' }}>
        <aside>
          <p className="text-white">&copy; 2025 EcoCoin. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default LandingPage;
