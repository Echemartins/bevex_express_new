"use client"
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { Button } from "@/app/components/ui/button";
import { ClipLoader } from "react-spinners";
import { ChevronDown } from "lucide-react";
import Testimonials from "./components/testimonials";
import { ShieldCheckIcon, ExclamationTriangleIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline';
import Footer from "./components/footer";
import { Menu } from "lucide-react";
import Header from "./components/header";
import CalendlyCTA from "./components/ui/cta";
import './globals.css';
 
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // Track the open FAQ index

  const handleToggle = (index) => {
    // If the clicked FAQ is already open, close it, otherwise open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 

  const faqs = [
    {
      question: "How fast can you resolve a violation?",
      answer:
        "Most violations are addressed within 24–48 hours after our initial consultation, depending on the complexity and DOB response time.",
    },
    {
      question: "What documents do I need to get started?",
      answer:
        "Usually just the violation notice, property address, and any DOB-related correspondence. We’ll guide you through the rest.",
    },
    {
      question: "Do you handle commercial properties?",
      answer:
        "Absolutely. We work with both residential and commercial property owners across NYC.",
    },
    {
      question: "Can you help clear Stop Work Orders?",
      answer:
        "Yes. We specialize in resolving Stop Work Orders efficiently by filing the necessary documents and working directly with the DOB.",
    },
    {
      question: "Is the consultation really free?",
      answer:
        "Yes — your first call is 100% free. We’ll review your situation, explain your options, and only move forward when you’re ready.",
    },
    {
      question: "Do you offer after-hours or emergency service?",
      answer:
        "We understand DOB violations can be time-sensitive. We offer extended hours and fast-tracked services for urgent matters.",
    },
  ];
  
  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  script.onload = () => {
    console.log("Calendly script loaded successfully");
  };
  script.onerror = () => {
    console.error("Failed to load Calendly script");
  };
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}, []);


  const handleCalendlyClick = () => {
    if (typeof Calendly !== "undefined") {
      setLoading(true);
      const calendlyUrl = "https://calendly.com/echemartins47";
      window.open(calendlyUrl, "_blank"); // Opens the link in a new tab
      // Calendly.initPopupWidget({ url: "https://calendly.com/echemartins47" });
      setTimeout(() => setLoading(false), 3000);
     
    } else {
      console.error("Calendly is not loaded yet.");
      console.log('not opening')
      // Optionally handle the case where Calendly is not loaded
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-white text-gray-900">
      <Head>
        <title>BevEX Express | Resolve NYC Building Violations Fast</title>
        <meta
          name="description"
          content="Resolve NYC building violations quickly with BevEX Express. Book a free call today and avoid costly fines."
        />
      </Head>

      {/* Header */}
      <Header
      scrollToSection={scrollToSection}
      handleCalendlyClick={handleCalendlyClick}
      loading={false}/>

      {/* Hero Section */}
      <section className="bg-blue-50 flex flex-col items-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-10 text-blue-700">
          Resolve NYC Building Violations - Before They Cost You Thousands
        </h2>
        {/* <p className="text-xl mb-6 text-blue-800">Book a Free Call with Cyrus</p> */}
        <Button
          onClick={handleCalendlyClick}
          className="bg-blue-400 hover:bg-blue-600 hover:cursor-pointer text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2"
        >
          {loading ? <ClipLoader size={20} color="#fff" /> : "Talk to our Consultants"}
        </Button>
        {/* <CalendlyCTA/> */}
      </section>

      {/* Embedded Video */}
      <section className="bg-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/wtwFQ6Pq3dE"
              title="BevEX Express Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">About BevEX Express</h2>
        <p className="font-medium text-blue-400">
          With over 5 years of experience in NYC, we specialize in code compliance, violation
          resolution, and permit handling 
        </p>
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-800">Our Focus</h2>
        <p className="font-medium text-blue-400">speed, affordability, and a no-stress
        process.</p>
      </section>

      {/* Services */}
      <section id="services" className="bg-blue-100 py-16 px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center text-blue-800">What We Help With</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Violation Resolution */}
          <div className="bg-white shadow-md p-6 rounded-lg text-left hover:scale-105 hover:border-t-4 hover:border-blue-600">
            <h3 className="text-xl font-bold mb-2 text-blue-800">Violation Resolution</h3>
            <p className="text-blue-400 font-medium font[5px] mt-5">We quickly assess and address your DOB violations to prevent escalating penalties and legal issues.</p>
          </div>

          {/* Architectural Drawings */}
          <div className="bg-white shadow-md p-6 rounded-lg text-left hover:scale-105 hover:border-t-4 hover:border-blue-600">
            <h3 className="text-xl font-bold mb-2 text-blue-800">Architectural Drawings</h3>
            <p className="text-blue-400 font-medium font[5px] mt-5">Our team produces code-compliant architectural plans for renovations, legalization, or new permit filings.</p>
          </div>

          {/* Permit Filing */}
          <div className="bg-white shadow-md p-6 rounded-lg text-left hover:scale-105 hover:border-t-4 hover:border-blue-600">
            <h3 className="text-xl font-bold mb-2 text-blue-800">Permit Filing</h3>
            <p className="text-blue-400 font-medium font[5px] mt-5">We manage all NYC DOB paperwork and filings to secure your permits without hassle or delay.</p>
          </div>

          {/* Stop Work Order Clearance */}
          <div className="bg-white shadow-md p-6 rounded-lg text-left hover:scale-105 hover:border-t-4 hover:border-blue-600">
            <h3 className="text-xl font-bold mb-2 text-blue-800">Stop Work Order Clearance</h3>
            <p className="text-blue-400 font-medium font[5px] mt-5">We resolve the root issue and handle inspections so your project can resume legally and safely.</p>
          </div>
        </div>
      </section>


      {/* Why Work With Us */}
      <section id="why" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-blue-800">Why Work With Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Fast Turnarounds */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3 text-blue-700">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Fast Turnarounds</h3>
            <p className="text-blue-800">We move swiftly to prevent delays and fines. Most filings and resolutions are initiated within 24–48 hours.</p>
          </div>

          {/* Proven Track Record */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3 text-blue-700">📊</div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Proven Track Record</h3>
            <p className="text-blue-800">Hundreds of successful cases handled across NYC—both residential and commercial. You’re in expert hands.</p>
          </div>

          {/* Affordable Pricing */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3 text-blue-700">💸</div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Straightforward Pricing</h3>
            <p className="text-blue-800">No hidden fees. We offer competitive, transparent pricing tailored to your specific violation and project type.</p>
          </div>

        </div>
      </section>


      {/* Case Highlights */}
      <section id="cases" className="bg-blue-50 py-16 px-4 text-center">
            <h2 className="text-3xl font-semibold mb-12 text-blue-800">Case Highlights</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-blue-900 divide-y-0 sm:divide-y-0 sm:divide-x lg:divide-x divide-blue-200">
              
              {/* Case 1 */}
              <div className="px-4 hover:bg-blue-100 transition rounded-lg">
                <ShieldCheckIcon className="h-8 w-8 text-green-600 mb-2" />
                <p className="text-lg font-semibold mb-1">Avoided $25K in fines</p>
                <p className="text-sm text-blue-700">
                  We acted quickly to resolve urgent violations, filing corrections within 48 hours and helping a residential client avoid hefty penalties.
                </p>
              </div>

              {/* Case 2 */}
              <div className="px-4 hover:bg-blue-100 transition rounded-lg">
                <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mb-2" />
                <p className="text-lg font-semibold mb-1">Cleared Class 1 violations</p>
                <p className="text-sm text-blue-700">
                  Through early intervention and expert strategy, we got ahead of multiple DOB hearings and resolved violations before they escalated.
                </p>
              </div>

              {/* Case 3 */}
              <div className="px-4 hover:bg-blue-100 transition rounded-lg">
                <DocumentArrowUpIcon className="h-8 w-8 text-blue-600 mb-2" />
                <p className="text-lg font-semibold mb-1">Filed permits in under 48 hrs</p>
                <p className="text-sm text-blue-700">
                  Our team expedited a commercial renovation by completing DOB filings within 2 days, keeping the project on schedule.
                </p>
              </div>

            </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-blue-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-12 text-blue-800">How It Works</h2>
        
        <div className="max-w-6xl mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-12 text-left text-white">
          {/* Step 1 */}
          <div className="bg-blue-300 rounded-[10px] flex flex-col items-center space-y-4">
            <img src="/th.jpeg" alt="Book Call" className="w-full h-[60%] rounded-t-[10px]" />
            <h3 className="text-xl font-semibold">1. Book a Call</h3>
            <p className="text-sm text-gray-200 text-center px-5 font-medium">
              Schedule a free consultation with our experts to discuss your violation, permit, or compliance issue.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-300 rounded-[10px] flex flex-col items-center space-y-4">
            <img src="/handle-it.jpeg" alt="We Handle It" className="w-full h-[60%] rounded-t-[10px]" />
            <h3 className="text-xl font-semibold">2. We Handle It</h3>
            <p className="text-sm text-gray-200 text-center px-5 font-medium">
              Our team immediately starts working on your case—filing documents, contacting DOB, and resolving issues.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-300 rounded-[10px] flex flex-col items-center space-y-4">
            <img src="/relaxation.jpeg" alt="Peace of Mind" className="w-full h-[60%] rounded-t-[10px]" />
            <h3 className="text-xl font-semibold">3. Peace of Mind</h3>
            <p className="text-sm text-gray-200 text-center px-5 font-medium">
              Sit back while we get it done. You’ll avoid fines, stay compliant, and stay stress-free.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
        <Button
          onClick={handleCalendlyClick}
          className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition hover:cursor-pointer"
          >
          {loading ? <ClipLoader size={20} color="#fff" /> : "Book a Free Call"}
        </Button>
          </div>
      </section>


      {/* Testimonials / Case Study Slider */}
      <Testimonials/>
      
      <section id="faq" className="bg-blue-50 py-16 px-4">
      <h2 className="text-3xl font-semibold mb-10 text-center text-blue-800">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          return (
            <div
              key={index}
              className={`bg-white rounded-lg shadow p-4 border-l-4 transition ${
                openIndex === index ? "border-green-500" : "border-blue-200"
              }`}
            >
              <button
                onClick={() => handleToggle(index)} // Toggle the FAQ answer
                className={`w-full outline-0 flex justify-between items-center text-left font-medium text-lg transition-colors ${
                  openIndex === index ? "text-green-600" : "text-blue-800"
                }`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "-rotate-90 text-green-600" : "rotate-0"
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-blue-700 text-base">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>


      {/* Contact CTA + Footer */}
     <Footer/>
    </div>
  );
}
