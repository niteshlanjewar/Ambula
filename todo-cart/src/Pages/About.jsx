import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200" style={{
      background: 'url(https://assets.technologynetworks.com/production/dynamic/images/content/328569/the-power-of-collaboration-tackling-pharmaceutical-challenges-328569-960x540.jpg?cb=10498257) center/cover',
    }}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6 text-xl font-bold">
          Ambula is an App based on UHI(Unified Health Interface) popularly known as 'Ayushman Bharat Digital Mission' envisioned by our honourable Prime Minister which connects patients live with the unified health network across India for all healthcare needs. 
          Ambula is committed to bridge all the communication gaps prevalent in healthcare delivery and Ambula will impart it's contribution to this Noble Vision.
          </p>
          <button className="btn btn-primary hover:bg-red-500 hover:text-white border border-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
