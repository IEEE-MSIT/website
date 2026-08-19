import React, { useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  CalendarRange,
  Bot,
  MessageSquare,
  Cpu,
  CheckCircle,
  Code2,
  Users,
  FileText,
  Image as ImageIcon,
  Calculator,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../constants/paths';

// Society Management Portal Images list
const smpImages = [
  { src: '/projects/smp-dashboard.png', title: 'Admin Dashboard' },
  { src: '/projects/smp-departments.png', title: 'Department Structure' },
  { src: '/projects/smp-members.png', title: 'Society Members List' },
  { src: '/projects/smp-attendance.png', title: 'Attendance Logger' },
];

// Student Toolkit Images list
const toolkitImages = [
  { src: '/projects/st-dashboard.png', title: 'Dashboard Overview' },
  { src: '/projects/st-gpa.png', title: 'GPA Planner' },
  { src: '/projects/st-percentage.png', title: 'Percentage Calculator' },
  { src: '/projects/st-image.png', title: 'Image Compressor' },
  { src: '/projects/st-attendance.png', title: 'Attendance Tracker' },
  { src: '/projects/st-calendar.png', title: 'Academic Calendar' },
  { src: '/projects/st-timetable.png', title: 'Timetable Manager' },
  { src: '/projects/st-qr.png', title: 'QR Scanner' },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'smp' | 'toolkit'>('smp');
  const [smpImgIndex, setSmpImgIndex] = useState(0);
  const [toolkitImgIndex, setToolkitImgIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const nextSmpImage = () => {
    setSmpImgIndex((prev) => (prev + 1) % smpImages.length);
  };

  const prevSmpImage = () => {
    setSmpImgIndex((prev) => (prev - 1 + smpImages.length) % smpImages.length);
  };

  const nextToolkitImage = () => {
    setToolkitImgIndex((prev) => (prev + 1) % toolkitImages.length);
  };

  const prevToolkitImage = () => {
    setToolkitImgIndex((prev) => (prev - 1 + toolkitImages.length) % toolkitImages.length);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 md:px-6">
      {/* Hero Section */}
      <section className="py-12 md:py-16 max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            to={HOME_PATH}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            IEEE MSIT Products
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
            Flagship Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the custom portals, tools, and platforms designed and built by the developers
            of IEEE MSIT. We turn concepts into production-ready software solutions.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-sm border border-gray-200/80 flex gap-2 w-full max-w-md">
            <button
              onClick={() => setActiveTab('smp')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'smp'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100/70 hover:text-gray-900'
              }`}
            >
              Society Portal
            </button>
            <button
              onClick={() => setActiveTab('toolkit')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'toolkit'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100/70 hover:text-gray-900'
              }`}
            >
              Student Toolkit
            </button>
          </div>
        </div>

        {/* ==================== PROJECT 1: SOCIETY PORTAL ==================== */}
        {activeTab === 'smp' && (
          <div className="space-y-12 animate-fade-in">
            {/* Top Grid: Info & Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Detailed Specs */}
              <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-200/60 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                    Society Management Portal
                  </h2>
                  <p className="text-sm text-primary font-medium">
                    Multi-Tenant Organizational Administration Suite
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  A full-stack, multi-tenant platform designed to manage society operations,
                  technical groups, and event coordination. It streamlines student community
                  management by centralizing resources, planning, and communications.
                </p>

                {/* Problems and Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div className="bg-red-50/50 border border-red-100 p-4 rounded-2xl">
                    <h4 className="text-red-800 font-bold text-sm mb-2">The Problem</h4>
                    <p className="text-xs text-red-700/90 leading-relaxed">
                      Society management operations are often scattered across Google Sheets,
                      Discord, notion, and manual spreadsheets, leading to data fragmentation and
                      miscommunication.
                    </p>
                  </div>
                  <div className="bg-green-50/50 border border-green-100 p-4 rounded-2xl">
                    <h4 className="text-green-800 font-bold text-sm mb-2">The Solution</h4>
                    <p className="text-xs text-green-700/90 leading-relaxed">
                      A unified portal bringing society operations, member coordination, real-time
                      channels, and event scheduling under a single tenant architecture.
                    </p>
                  </div>
                </div>

                {/* Project links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://my-fix-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl hover:bg-primary-hover transition-all text-sm font-semibold shadow-sm hover:shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo Link
                  </a>
                  <a
                    href="https://github.com/IEEE-MSIT/society_management_portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-black transition-all text-sm font-semibold shadow-sm hover:shadow"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repo
                  </a>
                </div>
              </div>

              {/* Interactive Screenshot Carousel for SMP */}
              <div className="lg:col-span-5 bg-white border border-gray-200/80 p-4 rounded-3xl shadow-lg flex flex-col justify-between">
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-[1.6]">
                  <img
                    src={smpImages[smpImgIndex].src}
                    alt={smpImages[smpImgIndex].title}
                    onClick={() => setSelectedImg(smpImages[smpImgIndex])}
                    className="w-full h-full object-cover select-none cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
                  />
                  {/* Overlay title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <p className="text-white text-xs font-bold uppercase tracking-wider">
                      {smpImages[smpImgIndex].title}
                    </p>
                    <p className="text-gray-300 text-[10px] mt-0.5">
                      Screenshot {smpImgIndex + 1} of {smpImages.length}
                    </p>
                  </div>

                  {/* Left / Right Controls */}
                  <button
                    onClick={prevSmpImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSmpImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Dot selectors */}
                <div className="flex justify-center gap-2 mt-4">
                  {smpImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSmpImgIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        smpImgIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Grid details: Features, Stack, Team */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Features */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/60 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" /> Key Features
                </h3>
                <ul className="space-y-3.5 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Secure Auth</strong>: Authentication via Clerk with roles.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Cpu className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Multi-Tenant System</strong>: Isolated dashboard settings per society.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CalendarRange className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Event Scheduler</strong>: Publish and promote upcoming activities.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Bot className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>AI Event Assistant</strong>: Powered by Gemini 1.5 Flash.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Real-time Chats</strong>: Built-in channels for active committees.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/60 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" /> Tech Stack
                </h3>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Frontend</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'TypeScript', 'Vite', 'Tailwind CSS'].map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-lg border border-gray-200/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      Backend & Database
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['Node.js', 'Express', 'TypeScript', 'PostgreSQL'].map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-lg border border-gray-200/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      Auth & Services
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['Clerk Auth', 'Gemini 1.5 Flash', 'Vercel Deployment'].map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-lg border border-gray-200/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contributors */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/60 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> Contributors Team
                </h3>
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="font-semibold text-sm text-gray-800">Gourav</span>
                    <span className="bg-primary/10 text-primary text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wide">
                      Team Lead
                    </span>
                  </div>
                  {['Kabir', 'Daksh', 'Hitesh', 'Harsh'].map((dev) => (
                    <div
                      key={dev}
                      className="flex items-center justify-between border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-gray-700">{dev}</span>
                      <span className="text-xs text-gray-400">Developer</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PROJECT 2: STUDENT TOOLKIT ==================== */}
        {activeTab === 'toolkit' && (
          <div className="space-y-12 animate-fade-in">
            {/* Top Grid: Info & Carousel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Detailed Specs */}
              <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-200/60 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                    Student Toolkit
                  </h2>
                  <p className="text-sm text-primary font-medium">
                    All-in-One Utility Suite & Student Portal
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  An all-in-one productivity suite built to resolve fragmented students utilities.
                  Instead of navigating separate sites to convert tools, calculate grades, or track
                  attendance, the Student Toolkit bundles these services into a centralized, fast
                  dashboard.
                </p>

                {/* Problems and Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div className="bg-red-50/50 border border-red-100 p-4 rounded-2xl">
                    <h4 className="text-red-800 font-bold text-sm mb-2">The Problem</h4>
                    <p className="text-xs text-red-700/90 leading-relaxed">
                      Students bounce between multiple sites to manage schedules, convert documents,
                      check attendance limits, or calculate semester GPAs, creating an unorganized
                      workflow.
                    </p>
                  </div>
                  <div className="bg-green-50/50 border border-green-100 p-4 rounded-2xl">
                    <h4 className="text-green-800 font-bold text-sm mb-2">The Solution</h4>
                    <p className="text-xs text-green-700/90 leading-relaxed">
                      A lightweight toolkit providing GPA planning, attendance trackers, local
                      image/PDF converters, and academic calendars under one OAuth login.
                    </p>
                  </div>
                </div>

                {/* Project links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://student-toolkit-plum.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl hover:bg-primary-hover transition-all text-sm font-semibold shadow-sm hover:shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo Link
                  </a>
                  <a
                    href="https://github.com/IEEE-MSIT/student_toolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-black transition-all text-sm font-semibold shadow-sm hover:shadow"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </a>
                </div>
              </div>

              {/* Interactive Screenshot Carousel */}
              <div className="lg:col-span-5 bg-white border border-gray-200/80 p-4 rounded-3xl shadow-lg flex flex-col justify-between">
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-[1.6]">
                  <img
                    src={toolkitImages[toolkitImgIndex].src}
                    alt={toolkitImages[toolkitImgIndex].title}
                    onClick={() => setSelectedImg(toolkitImages[toolkitImgIndex])}
                    className="w-full h-full object-cover select-none cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
                  />
                  {/* Overlay title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <p className="text-white text-xs font-bold uppercase tracking-wider">
                      {toolkitImages[toolkitImgIndex].title}
                    </p>
                    <p className="text-gray-300 text-[10px] mt-0.5">
                      Screenshot {toolkitImgIndex + 1} of {toolkitImages.length}
                    </p>
                  </div>

                  {/* Left / Right Controls */}
                  <button
                    onClick={prevToolkitImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextToolkitImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Dot selectors */}
                <div className="flex justify-center gap-2 mt-4">
                  {toolkitImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setToolkitImgIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        toolkitImgIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Grid details: Features, Stack, Team */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Features */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/60 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" /> Key Features
                </h3>
                <ul className="space-y-3.5 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>GitHub OAuth</strong>: Secure login integration for developers.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Calculator className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Academic Calculators</strong>: CGPA planners & Percentage utilities.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>PDF Merger</strong>: Client-side file consolidation tool.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ImageIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Image Compressor</strong>: Custom image formats optimization.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Attendance Tracker</strong>: Smart alerts on attendance safe zones.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/60 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" /> Tech Stack
                </h3>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Frontend</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'JavaScript', 'HTML5', 'Vanilla CSS', 'Vite'].map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-lg border border-gray-200/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      Backend & DB
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['Node.js', 'Express.js', 'MongoDB', 'Mongoose'].map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-lg border border-gray-200/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      OAuth & Modules
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['GitHub OAuth', 'REST APIs', 'PDF/Image Client Processing'].map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-lg border border-gray-200/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contributors */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/60 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> Contributors Team
                </h3>
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-gray-150 pb-2">
                    <span className="font-bold text-sm text-gray-800">IEEE MSIT Devs</span>
                    <span className="bg-secondary/15 text-secondary-dark text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wide">
                      Toolkit Team
                    </span>
                  </div>
                  {[
                    'Nirmit Aggarwal',
                    'Arpit Singh',
                    'Aaryan Gupta',
                    'Vaibhav Gupta',
                    'Abhishek Choudhary',
                  ].map((dev) => (
                    <div
                      key={dev}
                      className="flex items-center justify-between border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-gray-700">{dev}</span>
                      <span className="text-xs text-gray-400">Developer</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Lightbox / Zoom Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 select-none animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image overview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image & Navigation container */}
          <div
            className="relative max-w-5xl w-full flex flex-col items-center space-y-4 px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left navigation arrow */}
            <button
              onClick={activeTab === 'smp' ? prevSmpImage : prevToolkitImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={
                activeTab === 'smp'
                  ? smpImages[smpImgIndex].src
                  : toolkitImages[toolkitImgIndex].src
              }
              alt={
                activeTab === 'smp'
                  ? smpImages[smpImgIndex].title
                  : toolkitImages[toolkitImgIndex].title
              }
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Right navigation arrow */}
            <button
              onClick={activeTab === 'smp' ? nextSmpImage : nextToolkitImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <p className="text-white/90 text-sm font-semibold tracking-wide bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              {activeTab === 'smp'
                ? smpImages[smpImgIndex].title
                : toolkitImages[toolkitImgIndex].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
