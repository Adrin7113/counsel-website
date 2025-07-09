import React from 'react';
import ServiceItem from './ServiceItem';

const servicesData = [
    {
        title: "NARCISSISTIC BEHAVIOUR THERAPY & COUNSELLING",
        description: "Helps managing the narcissistic personality disorder, building confidence in the victim overcome emotional damages and successfully rebuild their life.",
        color: "bg-gray-700"
    },
    {
        title: "MARRIAGE COUNSELLING & COACHING",
        description: "Helps you overcome marriage and couple issues, resolve interpersonal and adjustment issues. Prepare you for a successful and happy marriage.",
        color: "bg-gray-700"
    },
    {
        title: "KARMA THERAPY & COUNSELLING",
        description: "Helps leading a regret-free life, overcome past failures, and achieve your dreams using the power of subconscious, faith and the law of attraction.",
        color: "bg-gray-700"
    },
    {
        title: "PERSONAL SUCCESS COUNSELLING & COACHING",
        description: "Helps overcome issues in your life like personal, professional, financial, social, marriage and family. Attract health, wealth, success, and happiness.",
        color: "bg-gray-700"
    },
    {
        title: "NARCISSISTIC BEHAVIOUR THERAPY & COUNSELLING",
        description: "Helps managing the narcissistic personality disorder, building confidence in the victim overcome emotional damages and successfully rebuild their life.",
        color: "bg-gray-700"
    },
    {
        title: "MARRIAGE COUNSELLING & COACHING",
        description: "Helps you overcome marriage and couple issues, resolve interpersonal and adjustment issues. Prepare you for a successful and happy marriage.",
        color: "bg-gray-700"
    },
    {
        title: "KARMA THERAPY & COUNSELLING",
        description: "Helps leading a regret-free life, overcome past failures, and achieve your dreams using the power of subconscious, faith and the law of attraction.",
        color: "bg-gray-700"
    },
    {
        title: "PERSONAL SUCCESS COUNSELLING & COACHING",
        description: "Helps overcome issues in your life like personal, professional, financial, social, marriage and family. Attract health, wealth, success, and happiness.",
        color: "bg-gray-700"
    }
];

const Services = () => {
  return (
    <div className="min-h-[70vh] w-screen bg-gray-200 flex flex-col items-center justify-center p-12 px-20 md:px-30 lg:px-40 xl:px-60 font-main">
      <h2 className="text-5xl font-light text-gray-700">Services</h2>
      <div className="w-24 h-1 bg-orange-500 mt-4 mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceItem 
            key={index} 
            title={service.title} 
            description={service.description} 
            color={service.color} 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;