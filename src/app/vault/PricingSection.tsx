import React from 'react';
import { CheckCircle } from 'lucide-react';

// NOTE: Replace these placeholder values with actual data
const price_growth = '4,999';
const price_pro = '8,999';
const RAZORPAY_LINK_GROWTH = '#growth-checkout'; // Placeholder for actual link
const RAZORPAY_LINK_PRO = '#pro-checkout';     // Placeholder for actual link

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase text-sm tracking-wider mb-2">
            GST included where applicable • Instant digital delivery
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase">
            Choose Your Vault
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          {/* 1. Growth (Starter) Card */}
          <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-10 border-2 border-zinc-900 transition duration-300 hover:border-red-600">
            <h3 className="text-2xl font-black mb-1">Growth (Starter)</h3>
            <p className="text-red-500 uppercase text-xs font-bold mb-6">Start Here</p>

            {/* Price */}
            <div className="mb-8">
              <div className="text-5xl font-black mb-1">₹{price_growth}</div>
              <p className="text-gray-400">one-time payment</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="font-semibold">Full Library Access (1,000+ templates)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Finance, Marketing, HR, Legal, & Ops</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>India-ready formats + Quick-Start Notes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Lifetime Updates</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>~ Advanced Kits (Ads, Investor, etc.)</span>
              </li>
            </ul>

            {/* Button */}
            <a 
              href={RAZORPAY_LINK_GROWTH}
              className="w-full block text-center bg-red-600 text-white py-4 rounded-full font-bold text-lg hover:bg-red-700 transition uppercase tracking-wider"
            >
              Get Growth &rarr;
            </a>
          </div>

          {/* 2. Growth Pro (Recommended) Card - ACCENTED */}
          <div className="bg-red-950/50 text-white rounded-3xl p-8 md:p-10 border-2 border-red-600 shadow-2xl shadow-red-900/50 relative">
            
            {/* Recommendation Badge */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider transform rotate-3">
                Recommended
            </div>
            
            <h3 className="text-2xl font-black mb-1">Growth Pro</h3>
            <p className="text-red-500 uppercase text-xs font-bold mb-6">Go Faster, Automate More</p>

            {/* Price */}
            <div className="mb-8">
              <div className="text-5xl font-black mb-1">₹{price_pro}</div>
              <p className="text-gray-400">one-time payment</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="font-semibold">Everything in Growth</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="font-semibold">Advanced Kits (Ads, Email, Investor, Hiring OS)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Notion Dashboards + Automation Mini-Packs</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Priority Updates (New drops first)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Licensing for Agencies/Multiple Brands</span>
              </li>
            </ul>

            {/* Button */}
            <a 
              href={RAZORPAY_LINK_PRO}
              className="w-full block text-center bg-white text-red-600 py-4 rounded-full font-black text-lg hover:bg-gray-200 transition uppercase tracking-wider"
            >
              Get Growth Pro &rarr;
            </a>
          </div>
        </div>
        
        {/* Tiny Footer Line */}
        <p className="text-center text-xs text-gray-500 mt-16">
          No physical items • Digital download only • Prices in INR
        </p>
      </div>
    </section>
  );
}


