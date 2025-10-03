"use client";
import React, { useState } from 'react';
import { Download, CheckCircle, Zap, Users, TrendingUp, FileText, DollarSign, Briefcase, Shield, Box, ChevronDown, ChevronUp, Play } from 'lucide-react';
import PricingSection from './PricingSection';
export default function StartupVaultLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-bold tracking-wider">STARTUP TEMPLATE VAULT</div>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition text-sm uppercase tracking-wider">
              Get The Vault
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            STARTUP<br />TEMPLATE<br />VAULT (1,000+)
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            A plug-and-play library for founders and early teams — accounts, marketing, HR, ops, sales, legal. Download, edit, deploy.
          </h2>
          
          <p className="text-lg text-gray-400 mb-10">
            No skills, no audience, no face needed, just follow the system and launch.
          </p>

          <button className="bg-red-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition mb-8 uppercase tracking-wider">
            Get The Vault
          </button>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs">Instant access</span>
            <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs">India-ready</span>
            <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs">Beginner-friendly</span>
            <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs">Lifetime updates</span>
          </div>
        </div>

        {/* Placeholder Images Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-zinc-900 rounded-xl aspect-[3/4]"></div>
          <div className="bg-zinc-900 rounded-xl aspect-[3/4]"></div>
          <div className="bg-zinc-900 rounded-xl aspect-[4/3] md:col-span-2"></div>
        </div>
      </section>

      {/* Join Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl mb-4 font-bold">Join 300+ students</p>
          <p className="text-gray-400 uppercase text-sm tracking-wider">Some of my results</p>
        </div>
      </section>

      {/* Ready to See Results */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">
            Ready to see<br />results like this?
          </h2>
        </div>
      </section>

      {/* Detail About This Program */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-red-500 uppercase text-sm tracking-wider mb-4">Detail About This Program</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase">
            What to expect from<br />this program
          </h2>
        </div>

        {/* Training Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="text-red-500 uppercase text-xs tracking-wider mb-4">TRAINING</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Access to Top 3 Courses</h3>
              <p className="text-gray-400 mb-8 max-w-2xl">
                Get lifetime access to 3 step-by-step courses that teach you everything you need to build and grow a digital product business. You'll also receive all future updates to these courses, at no extra cost.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-black/50 p-4 rounded-xl">
                  <p className="font-bold">Instagram Creators Course</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl">
                  <p className="font-bold">Digital Product Mastery</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl">
                  <p className="font-bold">Video Editing Secrets</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 h-64"></div>
          </div>
        </div>

        {/* Winning Products */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-zinc-800 h-96 rounded-3xl"></div>
            <div>
              <p className="text-red-500 uppercase text-xs tracking-wider mb-4">WINNING PRODUCTS</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready To Sell Digital Products</h3>
              <p className="text-gray-400">
                Don't want to spend months creating your own product? We've got you covered. You'll get 4 ready-to-sell digital products with full resell rights so you can start selling them as your own and keep 100% of the profit.
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-red-500 uppercase text-xs tracking-wider mb-4">SUPPORT</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Weekly Q&A Calls</h3>
              <p className="text-gray-400">
                Join Arush live every week to get direct coaching, clarity, and answers to your questions. If you ever miss a session or just want to revisit the advice, you'll also get access to the full recordings of every call.
              </p>
            </div>
            <div className="bg-zinc-800 h-96 rounded-3xl order-1 md:order-2"></div>
          </div>
        </div>

        {/* Community Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-zinc-800 h-96 rounded-3xl"></div>
            <div>
              <p className="text-red-500 uppercase text-xs tracking-wider mb-4">COMMUNITY</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Private Community</h3>
              <p className="text-gray-400">
                Join a supportive network of creators on the same journey. Share your wins, ask questions, get feedback, and grow alongside people who truly get it.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-red-500 uppercase text-xs tracking-wider mb-4">CASE STUDY</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">₹7.87 Lakhs in 30 Days: My Case Study</h3>
              <p className="text-gray-400">
                I'll show you the product, the ad spend & the actual net profit that was generated by me.
              </p>
            </div>
            <div className="bg-zinc-800 h-96 rounded-3xl order-1 md:order-2"></div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">Student Testimonials</h2>
          <p className="text-red-500 uppercase text-sm tracking-wider">Real people, real results</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-zinc-900 rounded-xl aspect-[3/4]"></div>
          ))}
        </div>
      </section>

      {/* Interview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            INTERVIEW: How Muskan Got 13 Million Views Using the Creator Secrets System
          </h2>
          
          <div className="bg-zinc-900 rounded-3xl aspect-video mb-6 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
              <Play className="w-10 h-10 fill-white" />
            </div>
          </div>
          
          <p className="text-gray-400 text-center">
            Muskan used the exact strategies you'll find inside Creator Secrets 2.0, It changes everything for her. If she can do it, so can you.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2">300+</div>
            <p className="text-gray-400 uppercase text-sm tracking-wider">members</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2">100+</div>
            <p className="text-gray-400 uppercase text-sm tracking-wider">success stories</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2">45L+</div>
            <p className="text-gray-400 uppercase text-sm tracking-wider">revenue generated</p>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="font-bold">365-day guarantee</p>
          </div>
          <div>
            <p className="font-bold">Instant Access</p>
          </div>
          <div>
            <p className="font-bold">Constant updates</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Course Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Get Instant Access To…</h2>
            <p className="text-2xl font-bold text-gray-400">3 Courses to Build, Launch & Scale</p>
          </div>

          {/* Digital Product Mastery */}
          <div className="mb-20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 bg-red-600 rounded-2xl flex-shrink-0"></div>
              <div>
                <h3 className="text-3xl font-black mb-2">Digital Product Mastery</h3>
                <p className="text-gray-400">Step-by-step course designed to help you build, launch, and scale profitable digital products.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Getting Started</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Welcome & How This Course Works</li>
                  <li>2. My Story: How I Built My Digital Product Business</li>
                  <li>3. Why Digital Products Are the #1 Online Business</li>
                  <li>4. The 3-Step System to Build, Launch & Scale</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Laying the Foundation</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Picking the Right Niche Without Overthinking</li>
                  <li>2. Understanding What Sells (Audience Psychology)</li>
                  <li>3. Roadmap to ₹1 Lakh+/Month with Digital Products</li>
                  <li>4. Best Way to Come Up with Profitable Product Ideas</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Product Creation System</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. 5-Step Checklist for Creating a Winning Product</li>
                  <li>2. How to Price Your Product for Maximum Sales</li>
                  <li>3. The Power of a Well-Built Product</li>
                  <li>4. Content That Attracts Buyers & Converts</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Sales & Automation</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Platforms & Tools to Run This Business</li>
                  <li>2. How to Set Up Your Paid Product</li>
                  <li>3. Email & DM Automation Setup (Step-by-Step)</li>
                  <li>4. My Exact Product Launch Strategy</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Scaling with Sales Assets</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. How to Create a Free Product That Sells Later</li>
                  <li>2. How to Effectively Promote Your Paid Product</li>
                  <li>3. Sales Video That Generated $300K (Full Breakdown)</li>
                  <li>4. Advanced Launch Content That Converts</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Ads & Growth</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Beginner-Friendly Ads Walkthrough</li>
                  <li>2. How I Scaled My Product with Paid Ads</li>
                  <li>3. The Fastest Way to Test Winning Campaigns</li>
                  <li>4. Scaling Roadmap: From ₹1 Lakh to ₹6 Lakh+</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instagram Creators Course */}
          <div className="mb-20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 bg-red-600 rounded-2xl flex-shrink-0"></div>
              <div>
                <h3 className="text-3xl font-black mb-2">Instagram Creators Course</h3>
                <p className="text-gray-400">In depth lessons about instagram content creation that prints money (Personal + Faceless both)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Kickstart Your Creator Journey</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Welcome & How This Course Works</li>
                  <li>2. The Math Behind Earning ₹12 Lakhs/Year as a Creator</li>
                  <li>3. Overcoming Fear of Posting & Self-Doubt</li>
                  <li>4. The Power of Starting Fast but Growing Smart</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Finding Your Profitable Niche</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. How to Pick the Right Niche for Growth</li>
                  <li>2. Niche Selection for Faceless Creators</li>
                  <li>3. The Elimination Method to Stand Out</li>
                  <li>4. Validating Your Niche for Long-Term Success</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Instagram Growth System</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Roadmap to Your First 10,000 Followers</li>
                  <li>2. The Smartest Way to Find Content Ideas</li>
                  <li>3. Training the Algorithm to Work for You</li>
                  <li>4. How to Convert Viewers Into Followers</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Content Creation & Editing</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. How to Create Aesthetic Reels (Step-by-Step)</li>
                  <li>2. Designing High-Converting Carousels on Canva</li>
                  <li>3. Simple Editing Hacks for Viral Content</li>
                  <li>4. How to Boost Story Views & Engagement</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Winning Strategies</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Growing a Personal Brand Page</li>
                  <li>2. Growing a Faceless Brand Page</li>
                  <li>3. Posting Frequency: How Much Is Enough?</li>
                  <li>4. Turning Your Page Into a Sales Funnel</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Monetization Mastery</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Choosing the Best Monetization Model</li>
                  <li>2. Making Money as a Freelancer</li>
                  <li>3. Earning with Paid Brand Collabs</li>
                  <li>4. Selling Digital Products (The Best Model)</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Video Editing Secrets */}
          <div>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 bg-red-600 rounded-2xl flex-shrink-0"></div>
              <div>
                <h3 className="text-3xl font-black mb-2">Video Editing Secrets</h3>
                <p className="text-gray-400">Master the art of editing professional videos that drive sales and grow your personal brand.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Getting Started with Editing</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Why Editing Is Essential for Creators</li>
                  <li>2. Tools Overview: Edits App, CapCut Desktop & Canva</li>
                  <li>3. Organizing Clips & Workflow Basics</li>
                  <li>4. Export Settings That Keep Quality Sharp</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Editing on Phone (Edits App)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Importing Clips & Trimming Like a Pro</li>
                  <li>2. Adding Text, Music & Syncing with Audio</li>
                  <li>3. Filters, Color Tweaks & Smooth Transitions</li>
                  <li>4. Exporting directly for reels</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Editing on Laptop (CapCut Desktop)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Setting Up Timeline & Cutting Clips Quickly</li>
                  <li>2. Adding Overlays, Text & Sound Effects</li>
                  <li>3. Simple Filters for Aesthetic Videos</li>
                  <li>4. Exporting for Instagram & YouTube Shorts</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-xl">
                <h4 className="font-bold mb-4">Carousel Creation on Canva</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>1. Finding & Customizing Templates Fast</li>
                  <li>2. Editing Fonts, Colors & Layouts That Pop</li>
                  <li>3. Exporting Polished Carousels in Minutes</li>
                  <li>4. Example: Build a Full Carousel in Under 5 Minutes</li>
                  <li className="text-red-500">And more…</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Bonuses Worth ₹20K+</h2>
            <p className="text-2xl font-bold text-red-500 uppercase tracking-wider">Join now and get all these bonuses</p>
          </div>

          {/* Bonus Items */}
          <div className="space-y-12">
            {/* Creator Vault */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-zinc-800 h-80 rounded-3xl"></div>
              <div>
                <p className="text-red-500 uppercase text-xs tracking-wider mb-4">BONUS</p>
                <h3 className="text-3xl font-black mb-4">Creator Vault</h3>
                <p className="text-gray-400">
                  Our best-selling and most loved product, Creator Vault, is yours inside Creator Secrets 2.0. Get instant access to 25,000+ viral luxury video clips, perfect for your reels, ads, and theme pages. Unlimited use, no editing skills needed, and designed to make your content look premium from day one.
                </p>
              </div>
            </div>

            {/* 300+ Viral Hook Video Clips */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="text-red-500 uppercase text-xs tracking-wider mb-4">BONUS</p>
                <h3 className="text-3xl font-black mb-4">300+ Viral Hook Video Clips</h3>
                <p className="text-gray-400">
                  Start your videos with impact. Get instant access to 300+ high-performing hook clips designed to grab attention in the first 3 seconds. Plug them straight into your reels, ads, or content. No editing skills needed, proven to boost watch time and engagement.
                </p>
              </div>
              <div className="bg-zinc-800 h-80 rounded-3xl order-1 md:order-2"></div>
            </div>

            {/* Readymade Templates */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-zinc-800 h-80 rounded-3xl"></div>
              <div>
                <p className="text-red-500 uppercase text-xs tracking-wider mb-4">BONUS</p>
                <h3 className="text-3xl font-black mb-4">Readymade Templates & Resources</h3>
                <p className="text-gray-400 mb-4">Get access to plug-and-play tools built to speed up your content creation:</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Daily planner sheets to stay consistent</li>
                  <li>• Canva templates for instant posts</li>
                  <li>• Reel templates you can make in 5 minutes</li>
                  <li>• ChatGPT prompts to 10x your growth</li>
                  <li>• and a lot more...</li>
                </ul>
              </div>
            </div>

            {/* AI Chat Bot */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="text-red-500 uppercase text-xs tracking-wider mb-4">BONUS</p>
                <h3 className="text-3xl font-black mb-4">AI Chat Bot (Viral Content Machine)</h3>
                <p className="text-gray-400">
                  You also get access to your own AI chat bot, Viral Content Machine. Think of it as your personal assistant for growth: it helps you come up with endless content ideas, discover new trends, write scripts and captions, plan monetization strategies, and so much more.
                </p>
              </div>
              <div className="bg-zinc-800 h-80 rounded-3xl order-1 md:order-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Mentor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Meet Your Mentor</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-900 rounded-3xl aspect-[3/4]"></div>
            
            <div>
              <h3 className="text-4xl font-black mb-8">Arush Aggarwal</h3>
              
              <div className="space-y-6 text-gray-400">
                <p className="text-xl font-bold text-white">Hey I'm Arush</p>
                <p className="text-xl font-bold text-white">And I've got a confession to make:</p>
                
                <p>I used to chase every online business model out there.</p>
                
                <p>Social media agency, affiliate marketing, even YouTube channels.</p>
                
                <p>I tried everything. Some things worked for a little while… but most of it failed.</p>
                
                <p>I remember spending months on ideas that either made me peanuts or completely burned out. And the worst part? Every time I thought I'd cracked it, it would collapse in a few weeks.</p>
                
                <p>Eventually, I had to face some painful truths.</p>
                
                <p>The problem wasn't me. It wasn't even about working harder. It was the models I was chasing.</p>
                
                <p>I was relying on things that gave zero control, zero long-term stability, and zero freedom.</p>
                
                <p>That's when I realized, if I wanted something real, I had to build it differently.</p>
                
                <p>Not another "trend." Not another short-lived hustle.</p>
                
                <p>But a system that grows bigger the more effort I put in.</p>
                
                <p className="text-white font-bold">And that's exactly what I found with digital products.</p>
                
                <p>Something that actually compounds, builds trust, and creates freedom instead of stress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creators I've Worked With */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 text-center uppercase tracking-wider">Creators I've Worked With</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-zinc-900 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <p className="font-bold">Tom Joris</p>
              <p className="text-sm text-gray-400">488K Followers</p>
            </div>
            <div className="text-center">
              <div className="bg-zinc-900 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <p className="font-bold">Corey Ruhnke</p>
              <p className="text-sm text-gray-400">13.4K Followers</p>
            </div>
            <div className="text-center">
              <div className="bg-zinc-900 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <p className="font-bold">Niklas Pedde</p>
              <p className="text-sm text-gray-400">606K Followers</p>
            </div>
            <div className="text-center">
              <div className="bg-zinc-900 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <p className="font-bold">Nick Banks</p>
              <p className="text-sm text-gray-400">18.8K Followers</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-400 mb-8">
              Working this closely with top creators gave me access to strategies and systems that most people on the outside never get to see. I know exactly what works, what doesn't, and how to build a digital product business that actually grows.
            </p>
            <p className="text-xl font-bold">And it's not just me saying this — here's what some of them had to say 👇</p>
          </div>
        </div>
      </section>

      

              

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Everything You Need To Know</h2>
            <p className="text-xl text-gray-400">Frequently Asked Questions</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "How do i receive the files?",
                a: "After payment, you’ll be redirected to a thank-you page with download links and you’ll also get an email with access."
              },
              {
                q: "What software do i need?",
                a: "Google drive or Microsoft office, Canva (free), and optionally notion."
              },
              {
                q: "Is this a course?",
                a: "No. it’s a template library with quick-start guides and checklists."
              },
              {
                q: "Can i use this for client work?",
                a: "Growth: for your own business. Growth pro: allowed for multiple brands you manage. (adjust this line if you want a different license.)"
              },
              {
                q: "Do i get updates?",
                a: "Yes, lifetime updates are included. New drops are announced by email."
              },
              {
                q: "Refunds?",
                a: "This is a digital product. If you face any access issue, email support@{yourbrand}.com and we’ll help right away."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 rounded-2xl border border-gray-800 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-start hover:bg-zinc-800/50 transition"
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-red-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-xl font-bold tracking-wider">STARTUP TEMPLATE VAULT</div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Refund</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">Not financial or legal advice. Consult a professional where needed.</p>
            <p>Contact: support@startupvault.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
