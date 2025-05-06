
import React from 'react';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 text-black">
      <Header />
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/300')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">My Portfolio</h1>
          <p className="text-xl text-black max-w-2xl">Delivering expertise in PLM, Project Management, and specialized services to drive excellence and innovation.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* PLM Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <div className="h-1 w-12 bg-blue-500 mr-4"></div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">PLM</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-blue-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-400 mr-2">●</span>
                BOM Achievements
              </h3>
              <ul className="space-y-3">
                {[
                  "Created first SUPER BOM (150% BOM) for Caterpillar Trucks in 2010",
                  "Developed Variant rule and Checks for matching the right part selection",
                  "Enterprise BOM developed for Semiconductor Manufacturer as per their Business needs",
                  "Defined different types of BOM to describe their needs and usecases"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-blue-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-400 mr-2">●</span>
                Materials Management
              </h3>
              <ul className="space-y-3">
                {[
                  "Developed new solutions for Raw materials and their cut parts handling in BOM",
                  "Part resource library solutions for various standards",
                  "Expertise in Part classification",
                  "Part release solutions and Part change Solutions",
                  "Develop solution for checking Part attachments and mandatory data to fulfill"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-blue-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-blue-400 mr-2">●</span>
                Business Process
              </h3>
              <ul className="space-y-3">
                {[
                  "AS-IS / TO-BE",
                  "ETO (Engineer to Order)",
                  "CTO (Configure to Order)",
                  "MTO (Make to Order)",
                  "MTS (Make to Stock)",
                  "ATO (Assemble to Order)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Project Management Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <div className="h-1 w-12 bg-purple-500 mr-4"></div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Project Management</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-purple-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-purple-400 mr-2">●</span>
                Management Areas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "TIME MANAGEMENT",
                  "STAKEHOLDER MANAGEMENT",
                  "COMMUNICATIONS MANAGEMENT",
                  "CONFLICTS MANAGEMENT",
                  "RISK MANAGEMENT",
                  "DELIVERY MANAGEMENT",
                  "CHANGE MANAGEMENT",
                  "RESOURCE MANAGEMENT"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-all">
                    <span className="text-pink-400 mr-2">◆</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-purple-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-purple-400 mr-2">●</span>
                Key Project Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Objective and Key Results - OKR",
                  "Key Performance Indicators – KPIs",
                  "Project Charter",
                  "Project Tracker",
                  "Dashboard",
                  "Agile Model",
                  "Traditional Project flow",
                  "Management Reports"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-3 hover:bg-slate-200 transition-all">
                    <span className="text-pink-400 mr-2">◆</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <div className="flex items-center mb-12">
            <div className="h-1 w-12 bg-cyan-500 mr-4"></div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">Services</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-cyan-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-70"></div>
              <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-cyan-400 mr-2">●</span>
                Design Contract
              </h3>
              <ul className="space-y-2">
                {[
                  "Tools, Jigs, Fixtures and Gauges Design",
                  "Mechanical Design",
                  "Electrical Design",
                  "PCB Design",
                  "Semiconductor IC Chip design",
                  "Components Design",
                  "Mold Design"
                ].map((item, index) => (
                  <li key={index} className="flex items-center py-1 border-b border-slate-700/50 last:border-0">
                    <span className="text-teal-400 mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-cyan-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-70"></div>
              <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-cyan-400 mr-2">●</span>
                IT Services
              </h3>
              <ul className="space-y-2">
                {[
                  "Full stack Development",
                  "Website Development",
                  "New Application Development",
                  "Network setup",
                  "Mobile application development",
                  "Interface calls",
                  "IIOT",
                  "Data Analytics",
                  "AI, ML, DL"
                ].map((item, index) => (
                  <li key={index} className="flex items-center py-1 border-b border-slate-700/50 last:border-0">
                    <span className="text-teal-400 mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white border-none shadow-xl hover:shadow-cyan-900/20 hover:translate-y-[-4px] transition-all duration-300 backdrop-blur-lg rounded-xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-70"></div>
              <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-cyan-400 mr-2">●</span>
                Outsourcing
              </h3>
              <ul className="space-y-2">
                {[
                  "Resource identification",
                  "Education and Research support",
                  "Establishing new IT Org",
                  "Payments handling to contracts",
                  "Sub contract setup"
                ].map((item, index) => (
                  <li key={index} className="flex items-center py-1 border-b border-slate-700/50 last:border-0">
                    <span className="text-teal-400 mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-700/50 text-center text-slate-400">
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Profile;
