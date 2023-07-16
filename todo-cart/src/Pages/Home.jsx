import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-300" style={{
      background: 'url(https://media.istockphoto.com/id/911633218/vector/abstract-geometric-medical-cross-shape-medicine-and-science-concept-background.jpg?s=612x612&w=0&k=20&c=eYz8qm5xa5wbWCWKgjOpTamavekYv8XqPTA0MC4tHGA=) center/cover',
    }}>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://ambula.app/assets/images/logo192.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Ambula Pharmaceutical
 Pvt. Ltd.</h1>
          <h3 className="text-2xl font-bold">Bringing loving care to health care.</h3>
          <p className="py-6">
          To be the leading healthcare institution, dedicated to providing exceptional medical care, promoting wellness, and advancing medical knowledge
          </p>
          <button className="btn btn-primary hover:bg-red-500 hover:text-white border border-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
