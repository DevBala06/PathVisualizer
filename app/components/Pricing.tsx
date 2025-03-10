import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';
import { RiBox2Fill, RiBox2Line, RiBox3Fill } from 'react-icons/ri';
import { gsap } from 'gsap';

const plans = [
  {
    name: 'Free trial',
    description: 'Best for small teams and freelancers.',
    monthlyPrice: '$0',
    annualPrice: '$0',
    buttonText: 'Start free trial',
  },
  {
    name: 'Business plan',
    description: 'Best for growing teams.',
    monthlyPrice: '$20',
    annualPrice: '$200',
    buttonText: 'Get started',
  },
  {
    name: 'Enterprise plan',
    description: 'Best for large organizations.',
    monthlyPrice: '$40',
    annualPrice: '$400',
    buttonText: 'Get started',
  },
];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".pricing-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
    );
  }, []);

  // Define icons for each plan header
  const planIcons = [RiBox2Fill, RiBox2Line, RiBox3Fill];

  return (
    <div className="min-h-screen bg-[#000000] w-full p-4">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-4xl font-bold text-white text-start mb-4">
          Choose a plan that’s right for you
        </h2>
        <p className="text-gray-400 text-start mb-8">
          Try our basic plan risk-free for 30 days. Switch plans or cancel anytime.
        </p>

        <div className="relative flex  w-64 bg-[#1a1a1a] rounded-md p-2 mb-8 items-start">
          <motion.div
            className="absolute inset-0 w-1/2 bg-black border border-neutral-600 rounded-md"
            animate={{ x: isAnnual ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <button
            className={`relative w-1/2 text-center text-sm font-medium transition-colors ${isAnnual?"text-white":""}`}
            onClick={() => setIsAnnual(true)}
          >
            Annual pricing
          </button>
          <button
            className={`relative w-1/2 text-center text-sm font-medium transition-colors text-gray-400 ${isAnnual?"":"text-white"}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly pricing
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan, index) => {
            const Icon = planIcons[index];
            return (
              <motion.div
                key={index}
                className={`pricing-card p-6 rounded-xl bg-[#1a1a1a] border transition-all cursor-pointer w-full ${
                  selectedPlan === index ? 'border-pink-500 shadow-2xl' : 'border-gray-800'
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="text-pink-500 text-2xl" />
                  <h3 className="text-xl text-white font-semibold">{plan.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-4">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  <span className="text-sm text-gray-400">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                <button
                  className={`mt-2 w-full py-2 rounded-lg font-medium transition-all ${
                    selectedPlan === index
                      ? 'bg-pink-500 hover:bg-pink-600'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-10 w-full overflow-x-auto">
  <table className="w-full text-sm text-gray-300 bg-black rounded-lg">
    <thead className="">
      <tr className="flex gap-x-60 justify-between border-b border-neutral-700">
        <th className="p-3">Features</th>
        <th className="p-3 text-nowrap">Free trial</th>
        <th className="p-3 text-nowrap">Business Plan</th>
        <th className="p-3 text-nowrap">Enterprise Plan</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center border-b border-neutral-700">
        <td className="p-3">Basic Features</td>
        <td className="p-3">
          <CircleCheck className="text-green-500 inline-block" />
        </td>
        <td className="p-3">
          <CircleCheck className="text-green-500 inline-block" />
        </td>
        <td className="p-3">
          <CircleCheck className="text-green-500 inline-block" />
        </td>
      </tr>
      <tr className="text-center border-b border-neutral-700">
        <td className="p-3">Users</td>
        <td className="p-3">10</td>
        <td className="p-3">20</td>
        <td className="p-3">Unlimited</td>
      </tr>
      <tr className="text-center">
        <td className="p-3">Data Storage</td>
        <td className="p-3">20GB</td>
        <td className="p-3">40GB</td>
        <td className="p-3">Unlimited</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default PricingSection;
