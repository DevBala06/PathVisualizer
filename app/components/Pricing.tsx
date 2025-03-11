"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck, CircleHelp } from 'lucide-react';
import { RiBox2Fill, RiBox2Line, RiBox3Fill } from 'react-icons/ri';
import { gsap } from 'gsap';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { pricingPlans } from '@/app/data/pricing';
import axios from 'axios';
import Script from 'next/script';

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): {
        open: () => void;
      };
    };
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayPaymentResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

const PricingSection = () => {

  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isAnnual, setIsAnnual] = useState(false);
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [isProcessing , setIsProcessing] = useState(false);
  const primaryEmail = user?.emailAddresses[0]?.emailAddress;

  const containerRef = useRef<HTMLDivElement>(null); 
  const [isMounted, setIsMounted] = useState(false);



  useLayoutEffect(() => {
    setIsMounted(true);
  
    if (!containerRef.current) return;

    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".pricing-card",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
        );
      },containerRef);
      return () => ctx.revert();
    }
  }, []);

const handlePayment = async (plan: typeof pricingPlans[0]) => {

  // Show Loader State
  setIsProcessing(true);
  console.log(plan)

  try {
    
    // ✅ Check if user is signed in
    
    if (isSignedIn) {
      // ✅ Send Payment Request to Backend
      const response = await axios.post("/api/upgrade-to-pro", {
        userId: user.id,
        name: plan.name,
        description:plan.description,
        price: isAnnual ? plan.annualPrice : plan.monthlyPrice,
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Success:", response.data);
      // ✅ Get Razorpay Details From Backend
      const { subscriptionId, orderId, keyId, amount } = response.data;

      // ✅ Initiate Razorpay Payment
      if (typeof window !== "undefined" && window.Razorpay) {
      const options = {
        key: keyId,
        amount,
        currency: "INR",
        name: "PathVisualizer Pro",
        description: `Upgrade to ${plan.name}`,
        order_id: orderId,
        handler: async function (paymentResponse: RazorpayPaymentResponse) {
          console.log("✅ Payment Successful", paymentResponse);

          // ✅ Update User's Subscription After Successful Payment
          const res = await axios.post("/api/new-user", {
            clerkId: user.id,
            userName: user.username || "default",
            email: primaryEmail,
            subscription: plan.name,
            subscriptionId,
            updatedAt: new Date(),
          }, {
            headers: { 'Content-Type': 'application/json' }
          });

          console.log("✅ User Upgraded to:", plan.name);
          console.log("✅ User Updated:", res.data);

          // ✅ Redirect User to Dashboard
          // router.push('/dashboard');
        },
        prefill: {
          name: "Customer name",
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        }
      };
      
      // ✅ Open Razorpay Payment Modal
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
    } else {
      // ✅ Redirect To Sign Up If Not Logged In
      router.push('/sign-up?redirectTo=/dashboard/settings');
      return;
    }
  } catch (error) {
    console.error("❌ Payment Failed", error);
  } finally {
    setIsProcessing(false);
  }
};

if (!isMounted) return null;



  // Define icons for each plan header
  const planIcons = [RiBox2Fill, RiBox2Line, RiBox3Fill];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#000000] w-full p-4">
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-4xl font-bold text-white text-start mb-4">
          Choose a plan that’s right for you
        </h2>
        <p className="text-gray-400 text-start mb-8">
          Try our basic plan risk-free for 30 days. Switch plans or cancel anytime.
        </p>

        {/* Toggle Button */}
        <div className="relative flex w-64 bg-[#1a1a1a] rounded-md p-2 mb-8 items-start">
          <motion.div
            className="absolute inset-0 w-1/2 bg-black border border-neutral-600 rounded-md"
            animate={{ x: isAnnual ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <button
            className={`relative w-1/2 text-center text-sm font-medium transition-colors ${isAnnual ? "text-white" : ""}`}
            onClick={() => setIsAnnual(true)}
          >
            Annual pricing
          </button>
          <button
            className={`relative w-1/2 text-center text-sm font-medium transition-colors text-gray-400 ${isAnnual ? "" : "text-white"}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly pricing
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
          {pricingPlans.map((plan, index) => {
            const Icon = planIcons[index];
            return (
              <motion.div
                key={index}
                className={` pricing-card relative p-6 rounded-xl bg-[#1a1a1a] transition-all cursor-pointer w-full
                  ${selectedPlan === index ? 'border-none' : 'border border-gray-800'}
                `}
                onClick={() => setSelectedPlan(index)}
              >
                {/* Gradient Border */}
                {selectedPlan === index && (
                  <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-teal-500 to-blue-500">
                    <div className="w-full h-full rounded-[10px] bg-[#1a1a1a]"></div>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center gap-2 mb-2">
                    <h3 className="text-xl text-white font-semibold">{plan.name}</h3>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-4">{"₹"}
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-sm text-gray-400">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  <button
                    className={`mt-2 w-full py-2 rounded-lg font-medium transition-all ${
                      selectedPlan === index
                        ? 'bg-pink-600 text-white hover:bg-pink-700'
                        : 'bg-[#3B3B3B] text-white hover:bg-[#2f2f2f]'
                    }`}
                    onClick={() => handlePayment(plan)}
                    disabled={isProcessing}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Table */}
<div className="mt-10 w-full overflow-x-auto">
  <table className="w-full text-sm text-gray-300 bg-black rounded-lg border-collapse">
    <thead>
      <tr className="grid grid-cols-4 text-left border-b border-neutral-700">
        <th className="p-3 text-left">Features</th>
        <th className="p-3 text-center">Free Trial</th>
        <th className="p-3 text-center">Business Plan</th>
        <th className="p-3 text-center">Enterprise Plan</th>
      </tr>
    </thead>
    <tbody>
      {/* Loop through Features */}
      {pricingPlans[0].features.map((_, featureIndex) => (
        <tr key={featureIndex} className="grid grid-cols-4 border-b border-neutral-700">
          {/* Feature Name */}
          <td className="p-3 text-left font-medium text-sm flex gap-1 items-center">
            {pricingPlans[0].features[featureIndex].name}<CircleHelp className='text-neutral-600 scale-75'/>
          </td>

          {/* Loop through Pricing Plans */}
          {pricingPlans.map((plan, planIndex) => {
            const feature = plan.features[featureIndex];
            return (
              <td key={planIndex} className="p-3 text-center">
                {/* ✅ Render Ticks ✔ or ❌ */}
                {feature.available  ? (
                  <CircleCheck className="text-green-500 mx-auto" />
                ) : (
                  ""
                )}

                {/* ✅ Render Feature Value (like 0 / 5 / Unlimited) */}
                {feature.value && (
                  <span className="block text-xs text-neutral-500">
                    {feature.value}
                  </span>
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default PricingSection;

