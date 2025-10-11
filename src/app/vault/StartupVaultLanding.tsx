"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle, X, FileText, Users, Briefcase, Building2, Clock } from 'lucide-react';

export default function StartupVaultLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <div className="text-xl font-bold tracking-wider">STARTUP TEMPLATE VAULT</div>
            </div>
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition text-sm uppercase tracking-wider">
              Get Instant Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                1,000+ Ready-to-Use<br />Templates for<br />Startups &<br />Freelancers
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
                Save weeks of work with plug-and-play templates for marketing, finance, HR, ops, sales, and legal.
              </p>

              <button className="bg-yellow-500 text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition mb-6 uppercase tracking-wider">
                Get Instant Access
              </button>

              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs border border-zinc-800">Instant access</span>
                <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs border border-zinc-800">India-ready</span>
                <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs border border-zinc-800">Beginner-friendly</span>
                <span className="bg-zinc-900 px-4 py-2 rounded-full text-xs border border-zinc-800">Lifetime updates</span>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative">
              <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Built for people who want to start, and move fast</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">New founders who don't know where to begin</h3>
              <p className="text-gray-400">Skip the guesswork with ready-made templates</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Solo builders who want done-for-you docs</h3>
              <p className="text-gray-400">Save weeks of work with plug-and-play files</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Small teams that need proven formats, not blank pages</h3>
              <p className="text-gray-400">Industry-standard templates you can trust</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Agencies/startups that want India-ready paperwork</h3>
              <p className="text-gray-400">GST-compliant and legally sound documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section with Timer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Preview */}
            <div className="bg-zinc-900 rounded-3xl p-12 border border-zinc-800">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl"></div>
                <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
                <div className="space-y-3 pt-6">
                  <div className="h-3 bg-zinc-800 rounded"></div>
                  <div className="h-3 bg-zinc-800 rounded"></div>
                  <div className="h-3 bg-zinc-800 rounded w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">The Ultimate Startup Toolkit</h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">1,000+ editable templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">Finance, HR, marketing, and legal docs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">Compatible with Notion, Google Sheets, Canva</span>
                </li>
              </ul>

              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition border border-zinc-800"
                >
                  View More Details
                </button>
                <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition">
                  Get Instant Access
                </button>
              </div>

              {/* Countdown Timer */}
              <div className="bg-yellow-500/10 border-2 border-yellow-500 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-yellow-500" />
                  <p className="text-lg font-bold">Limited Time Offer!</p>
                </div>
                <div className="flex gap-4 justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-500">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 uppercase">Hours</div>
                  </div>
                  <div className="text-4xl font-black text-yellow-500">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-500">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 uppercase">Minutes</div>
                  </div>
                  <div className="text-4xl font-black text-yellow-500">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-500">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 uppercase">Seconds</div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">Get 60% off before the timer runs out!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">Loved by 500+ Founders</h2>
          <p className="text-center text-gray-400 mb-12">Real results from real people</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full"></div>
                  <div>
                    <div className="h-3 bg-zinc-800 rounded w-24 mb-2"></div>
                    <div className="h-2 bg-zinc-800 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-zinc-800 rounded"></div>
                  <div className="h-3 bg-zinc-800 rounded"></div>
                  <div className="h-3 bg-zinc-800 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "How do I get access after payment?",
                a: "After payment, you'll be redirected to a thank-you page with download links and you'll also get an email with access."
              },
              {
                q: "Are templates editable?",
                a: "Yes! All templates are fully editable in their respective formats (Google Sheets, Notion, Canva, etc.)."
              },
              {
                q: "What software do I need?",
                a: "Google Drive or Microsoft Office, Canva (free), and optionally Notion."
              },
              {
                q: "Is this a course?",
                a: "No, it's a template library with quick-start guides and checklists."
              },
              {
                q: "Can I use this for client work?",
                a: "Growth: for your own business. Growth Pro: allowed for multiple brands you manage."
              },
              {
                q: "Do I get updates?",
                a: "Yes, lifetime updates are included. New drops are announced by email."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-zinc-800 transition"
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  <span className="text-red-500 text-2xl">{openFaq === index ? '−' : '+'}</span>
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
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <div className="text-xl font-bold tracking-wider">STARTUP TEMPLATE VAULT</div>
            </div>
            
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

      {/* Modal for Product Details */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800">
            <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-black">What's Inside The Vault</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Finance & Accounts */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-500">Finance & Accounts</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• GST-ready invoice, quote & PO templates</li>
                  <li>• P&L, cash-flow, runway tracker</li>
                  <li>• Expense policy, reimbursement forms</li>
                  <li>• Budget planning sheets</li>
                </ul>
              </div>

              {/* Marketing & Growth */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-500">Marketing & Growth</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• 90-day content calendar, reel scripts</li>
                  <li>• Ad briefs, media plan, campaign report</li>
                  <li>• Landing page copy blocks, offer sheets</li>
                  <li>• Social media post templates</li>
                </ul>
              </div>

              {/* HR & People Ops */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-500">HR & People Ops</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Offer letter, appointment letter, NDA</li>
                  <li>• Leave policy, attendance tracker, payroll sheet</li>
                  <li>• Performance review, KPI & KRA sheets</li>
                  <li>• Onboarding checklists</li>
                </ul>
              </div>

              {/* Sales & CRM */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-500">Sales & CRM</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Discovery call script, proposal deck</li>
                  <li>• Pipeline tracker, follow-up cadences</li>
                  <li>• Pricing calculator, discount approval note</li>
                  <li>• Sales playbooks</li>
                </ul>
              </div>

              {/* Operations */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-500">Operations & Project</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• SOP templates, task matrices, RACI</li>
                  <li>• Sprint board, QA checklist, handover doc</li>
                  <li>• Vendor onboarding & assessment</li>
                  <li>• Project management templates</li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-yellow-500">Legal & Compliance</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• NDA, NCA, basic service agreement</li>
                  <li>• Privacy policy starter, website terms baseline</li>
                  <li>• Incident register, data request log</li>
                  <li>• Contract templates</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-zinc-800">
                <button className="w-full bg-yellow-500 text-black py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition uppercase tracking-wider">
                  Get Instant Access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
