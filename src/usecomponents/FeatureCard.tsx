import React from 'react';

const FeatureCard = ({ icon, title, description, points }:any) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-white text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <ul className="list-disc list-inside">
        {points.map((point:any, index:any) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
