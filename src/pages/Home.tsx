import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

function Home({ user, SignOut }: { user?: any; SignOut?: () => void }) {
  // Tabs state for the features showcase section
  const [activeTab, setActiveTab] = useState(0)

  // Like counts state for the inspiration grid cards
  const [likes, setLikes] = useState([42, 128, 89, 256, 74, 115])

  // Custom range value for Card 1 preview
  const [rangeVal, setRangeVal] = useState(50)
  useEffect(() => {
    const interval = setInterval(() => {
      setRangeVal((prev) => {
        const next = prev + 1
        return next > 100 ? 0 : next
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  // Card 2 interactive 3D rotate
  const [card2Rotate, setCard2Rotate] = useState({ x: 0, y: 0 })
  const handleCard2MouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setCard2Rotate({
      x: -y / 10,
      y: x / 10,
    })
  }
  const handleCard2MouseLeave = () => {
    setCard2Rotate({ x: 0, y: 0 })
  }

  // Increment likes micro-interaction
  const handleLike = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newLikes = [...likes]
    newLikes[index] += 1
    setLikes(newLikes)
  }

  return (
    <div className="w-full min-h-screen bg-[#0f1015] text-white overflow-x-hidden font-sans selection:bg-[#47cf73]/30 selection:text-[#47cf73]">
      <Navbar user={user} SignOut={SignOut} />

      {/* Hero Section */}
      <header className="relative w-full py-16 px-6 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Background glow effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero Left Content */}
        <div className="flex flex-col items-start space-y-8 z-10">
          <div className="flex items-center gap-4 animate-fade-in">
            <svg
              className="w-14 h-14 text-white hover:rotate-12 transition-transform duration-300"
              viewBox="0 0 100 100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z" />
            </svg>
            <h2 className="text-xl md:text-2xl font-black tracking-widest text-[#47cf73] uppercase">CodeBox</h2>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            The best place to build, test, and discover front-end code.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            CodeBox is a social development environment for front-end designers and developers. Build and deploy a
            website, show off your work, build test cases to learn and debug, and find inspiration.
          </p>

          <Link to={user ? '/code' : '/signup'} className="w-full sm:w-auto">
            <Button
              name={user ? 'Go to Editor' : 'Sign Up for Free'}
              variant="primary"
              className="w-full sm:w-auto text-base px-8 py-4 font-bold rounded-lg shadow-lg shadow-[#47cf73]/10 hover:shadow-[#47cf73]/20 hover:scale-[1.03] active:scale-[0.98]"
            />
          </Link>

          {/* MongoDB Sponsored Card */}
          <div className="w-full max-w-md bg-[#1e1f26] border border-[#2c303d] rounded-xl p-4 flex gap-4 mt-8 hover:border-gray-600 transition-colors">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#001e2b] flex items-center justify-center border border-[#00684a]/30">
              <svg className="w-6 h-6 text-[#00ed64]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.5 6.4 8 10.9 8 13.5c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-2.6-1.5-7.1-4-11.5zm0 13.5c-.8 0-1.5-.7-1.5-1.5S11.2 12.5 12 12.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
              </svg>
            </div>
            <div className="flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-white uppercase tracking-wider">MongoDB Atlas</span>
                <span className="bg-[#2c303d] text-gray-400 text-[9px] px-1.5 py-0.5 rounded uppercase font-bold">Sponsored</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Build, deploy, and scale with MongoDB Atlas, the developer data platform. Register for free now.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Right: Interactive Mock Workspace Window */}
        <div className="relative w-full flex justify-center lg:justify-end z-10">
          {/* Aesthetic background curves SVGs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] overflow-hidden pointer-events-none select-none">
            <svg className="w-full h-full opacity-60" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-50,300 C100,200 250,450 400,250 C480,150 520,300 580,200"
                stroke="url(#neon-rainbow)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="neon-rainbow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ae63e4" />
                  <stop offset="40%" stopColor="#0ebeff" />
                  <stop offset="70%" stopColor="#ffdd40" />
                  <stop offset="100%" stopColor="#47cf73" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mock Window Container */}
          <div className="w-full max-w-lg bg-[#18191e] border border-[#2c303d] rounded-xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col group hover:border-gray-700 transition-colors duration-300">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131417] border-b border-[#1c1d23]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-gray-500 font-mono">index.html</div>
              <div className="w-12"></div>
            </div>

            {/* Code Editors Showcase Grid */}
            <div className="grid grid-cols-3 divide-x divide-[#2c303d] border-b border-[#2c303d]">
              {/* HTML Editor Tab */}
              <div className="p-3 bg-[#18191e] font-mono text-[10px] text-gray-400 flex flex-col gap-1 select-none">
                <span className="text-[#ae63e4] font-semibold uppercase text-[9px] tracking-wide mb-1">HTML</span>
                <div>
                  <span className="text-blue-400">&lt;div</span>{' '}
                  <span className="text-yellow-400">class</span>=<span className="text-green-400">&quot;card&quot;</span>
                  <span className="text-blue-400">&gt;</span>
                </div>
                <div className="pl-3">
                  <span className="text-blue-400">&lt;div</span>{' '}
                  <span className="text-yellow-400">class</span>=<span className="text-green-400">&quot;shine&quot;</span>
                  <span className="text-blue-400">&gt;&lt;/div&gt;</span>
                </div>
                <div className="pl-3">
                  <span className="text-blue-400">&lt;h1&gt;</span>CodeBox<span className="text-blue-400">&lt;/h1&gt;</span>
                </div>
                <div><span className="text-blue-400">&lt;/div&gt;</span></div>
              </div>

              {/* CSS Editor Tab */}
              <div className="p-3 bg-[#18191e] font-mono text-[10px] text-gray-400 flex flex-col gap-1 select-none">
                <span className="text-[#0ebeff] font-semibold uppercase text-[9px] tracking-wide mb-1">CSS</span>
                <div>
                  <span className="text-yellow-400">.card</span> &#123;
                </div>
                <div className="pl-3 text-gray-500">
                  background: <span className="text-purple-400">linear-gradient()</span>;
                </div>
                <div className="pl-3 text-gray-500">
                  animation: <span className="text-green-400">float 4s infinite</span>;
                </div>
                <div>&#125;</div>
              </div>

              {/* JS Editor Tab */}
              <div className="p-3 bg-[#18191e] font-mono text-[10px] text-gray-400 flex flex-col gap-1 select-none">
                <span className="text-[#ffdd40] font-semibold uppercase text-[9px] tracking-wide mb-1">JavaScript</span>
                <div className="text-gray-500">// Welcome!</div>
                <div>
                  <span className="text-pink-400">const</span> <span className="text-blue-400">app</span> = <span className="text-green-400">&quot;CodeBox&quot;</span>;
                </div>
                <div>
                  <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(app);
                </div>
              </div>
            </div>

            {/* Live Result Preview Mockup */}
            <div className="bg-[#131417] h-48 flex items-center justify-center p-6 relative overflow-hidden">
              {/* Outer floating card */}
              <div className="relative w-40 h-24 bg-gradient-to-br from-[#1e1f26] to-[#0b0c10] border border-white/10 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out z-10 animate-pulse">
                {/* Rotating glow ring */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#47cf73]/20 via-[#0ebeff]/20 to-[#ae63e4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>

                <div className="text-center">
                  <h3 className="text-lg font-black tracking-widest bg-gradient-to-r from-white via-gray-200 to-[#47cf73] bg-clip-text text-transparent uppercase">
                    CodeBox
                  </h3>
                  <span className="text-[9px] text-[#47cf73] font-mono tracking-widest block mt-1 uppercase">Live Preview</span>
                </div>
              </div>

              {/* Decorative floating grids */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/2 rounded-full border border-white/5 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/2 rounded-full border border-white/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Grid Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1e1f26]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1e1f26] border border-[#2c303d] hover:border-[#ffdd40]/50 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ffdd40]/10 border border-[#ffdd40]/20 flex items-center justify-center text-[#ffdd40] mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Build & Test</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Get work done quicker by building versatile demos and prototypes. Use our editor to write HTML, CSS,
                and JavaScript, write test cases, and find inspiration.
              </p>
            </div>
            <Link to={user ? '/code' : '/signup'}>
              <Button name="Try the Editor" variant="outline" className="w-full" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1e1f26] border border-[#2c303d] hover:border-[#47cf73]/50 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#47cf73]/10 border border-[#47cf73]/20 flex items-center justify-center text-[#47cf73] mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Learn & Discover</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Want to learn how code works? CodeBox is a great place to start. Practice by writing code, building
                test cases, and participating in our weekly coding challenges.
              </p>
            </div>
            <Link to={user ? '/code' : '/signup'}>
              <Button name="Join the Weekly Challenge" variant="outline" className="w-full" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1e1f26] border border-[#2c303d] hover:border-[#0ebeff]/50 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0ebeff]/10 border border-[#0ebeff]/20 flex items-center justify-center text-[#0ebeff] mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l-1.92 6.07a1 1 0 001.24 1.258l6.07-1.92a1 1 0 00.578-.578l1.92-6.07a1 1 0 00-1.24-1.258l-6.07 1.92a1 1 0 00-.578.578z" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Share Your Work</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Become a part of our developer community. Share your creations, get feedback, and find inspiration from
                other developers. Show off your work inside dynamic views.
              </p>
            </div>
            <Link to={user ? '/code' : '/signup'}>
              <Button name="Explore Trending" variant="outline" className="w-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* Find Inspiration Gallery */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1e1f26]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Find inspiration from 1.8 million+ front-end designers and developers.
          </h2>
          <p className="text-gray-400">
            Browse and learn from work created by world-class designers and developers in the front-end community.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Custom Range Input */}
          <div className="bg-[#1c1d23] border border-[#2c303d] rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-300 group flex flex-col h-[320px] justify-between">
            <div className="bg-[#0b0c10] h-44 flex flex-col items-center justify-center p-6 border-b border-[#2c303d] overflow-hidden select-none">
              <div className="w-full max-w-xs space-y-4">
                <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                  <span>Volume level</span>
                  <span className="text-[#47cf73] font-bold">{rangeVal}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={rangeVal}
                  readOnly
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#47cf73]"
                />
                <div className="w-full h-1.5 bg-[#47cf73]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#47cf73] to-[#0ebeff]" style={{ width: `${rangeVal}%` }}></div>
                </div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-[#ffdd40] flex items-center justify-center text-[11px] font-bold text-black border border-white/10 select-none">
                  RB
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Custom Input range</h4>
                  <span className="text-xs text-gray-500">Robin</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(0, e)}
                  className="flex items-center gap-1.5 hover:text-red-500 text-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-xs font-semibold">{likes[0]}</span>
                </button>
                <span className="bg-[#47cf73]/10 text-[#47cf73] text-[9px] px-2 py-0.5 rounded font-black">PRO</span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Fluid Business Card */}
          <div
            className="bg-[#1c1d23] border border-[#2c303d] rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-300 group flex flex-col h-[320px] justify-between perspective-1000"
            onMouseMove={handleCard2MouseMove}
            onMouseLeave={handleCard2MouseLeave}
          >
            <div className="bg-[#0b0c10] h-44 flex items-center justify-center p-6 border-b border-[#2c303d] overflow-hidden select-none">
              <div
                className="w-44 h-28 rounded-xl bg-gradient-to-br from-green-500 via-[#1b7c43] to-[#0a2f18] p-4 flex flex-col justify-between shadow-lg transition-transform duration-100 ease-out border border-white/10"
                style={{
                  transform: `rotateX(${card2Rotate.x}deg) rotateY(${card2Rotate.y}deg)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-[8px] text-white">AS</div>
                  <span className="text-[10px] text-white/80 font-bold font-mono tracking-wider">Amit Sheen</span>
                </div>
                <div className="text-right">
                  <span className="text-[8px] text-white/50 block font-mono">Creative Developer</span>
                  <span className="text-[10px] text-white font-bold tracking-widest font-mono">FLUID CARD</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0ebeff] to-purple-600 flex items-center justify-center text-[11px] font-bold text-black border border-white/10 select-none">
                  AS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Fluid Business Card</h4>
                  <span className="text-xs text-gray-500">Amit Sheen</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(1, e)}
                  className="flex items-center gap-1.5 hover:text-red-500 text-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-xs font-semibold">{likes[1]}</span>
                </button>
                <span className="bg-[#47cf73]/10 text-[#47cf73] text-[9px] px-2 py-0.5 rounded font-black">PRO</span>
              </div>
            </div>
          </div>

          {/* Card 3: CSS Beach Waves */}
          <div className="bg-[#1c1d23] border border-[#2c303d] rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-300 group flex flex-col h-[320px] justify-between">
            <div className="bg-[#0b0c10] h-44 flex items-end justify-center border-b border-[#2c303d] overflow-hidden select-none relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#134e5e] to-[#71b280] opacity-40"></div>
              {/* Waves container SVG */}
              <svg className="w-full h-20 fill-current text-teal-400/80 animate-pulse" viewBox="0 0 120 28" preserveAspectRatio="none">
                <defs>
                  <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                  <use href="#wave" x="48" y="0" fill="rgba(71,207,115,0.7)" />
                  <use href="#wave" x="48" y="3" fill="rgba(14,190,255,0.5)" />
                  <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                </g>
              </svg>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ae63e4] to-red-400 flex items-center justify-center text-[11px] font-bold text-black border border-white/10 select-none">
                  MK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">CSS-Only Beach Waves</h4>
                  <span className="text-xs text-gray-500">Mike</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(2, e)}
                  className="flex items-center gap-1.5 hover:text-red-500 text-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-xs font-semibold">{likes[2]}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: World Cup 2026 */}
          <div className="bg-[#1c1d23] border border-[#2c303d] rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-300 group flex flex-col h-[320px] justify-between">
            <div className="bg-[#0b0c10] h-44 flex items-center justify-center p-6 border-b border-[#2c303d] overflow-hidden select-none relative">
              {/* Bouncing Soccer Ball inside circle */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center animate-bounce">
                  <svg className="w-7 h-7 text-white fill-current animate-spin" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div className="w-12 h-1.5 bg-black/40 rounded-full blur-xs mt-3 scale-x-75 animate-pulse"></div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#47cf73] to-teal-400 flex items-center justify-center text-[11px] font-bold text-black border border-white/10 select-none">
                  TW
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">World Cup 2026</h4>
                  <span className="text-xs text-gray-500">Team Winner</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(3, e)}
                  className="flex items-center gap-1.5 hover:text-red-500 text-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-xs font-semibold">{likes[3]}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: Wind/Force Gauge */}
          <div className="bg-[#1c1d23] border border-[#2c303d] rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-300 group flex flex-col h-[320px] justify-between">
            <div className="bg-[#0b0c10] h-44 flex items-center justify-center p-6 border-b border-[#2c303d] overflow-hidden select-none">
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Speedometer Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="46" stroke="#1e1f26" strokeWidth="8" fill="transparent" />
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="#0ebeff"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="289"
                    strokeDashoffset="120"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Gauge Needle */}
                <div className="absolute w-1.5 h-14 bg-red-500 origin-bottom bottom-[56px] rounded-full transform rotate-30 transition-transform duration-1000 animate-pulse"></div>
                <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-red-500"></div>
                <span className="absolute bottom-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest">WIND FORCE</span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0ebeff] to-blue-500 flex items-center justify-center text-[11px] font-bold text-black border border-white/10 select-none">
                  LN
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Wind/Force Slider</h4>
                  <span className="text-xs text-gray-500">Lionel</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(4, e)}
                  className="flex items-center gap-1.5 hover:text-red-500 text-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-xs font-semibold">{likes[4]}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 6: Glassmorphism Login */}
          <div className="bg-[#1c1d23] border border-[#2c303d] rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-300 group flex flex-col h-[320px] justify-between">
            <div className="bg-[#0b0c10] h-44 flex items-center justify-center p-6 border-b border-[#2c303d] overflow-hidden select-none relative">
              {/* background glowing blur nodes */}
              <div className="absolute w-12 h-12 bg-pink-500/80 rounded-full blur-sm top-10 left-12 animate-pulse"></div>
              <div className="absolute w-16 h-16 bg-blue-500/80 rounded-full blur-sm bottom-10 right-10 animate-bounce"></div>

              {/* Glassmorphic card */}
              <div className="w-40 h-24 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 flex flex-col justify-between shadow-2xl relative z-10">
                <div className="w-full h-2.5 bg-white/30 rounded-sm"></div>
                <div className="w-full h-2.5 bg-white/30 rounded-sm"></div>
                <div className="w-1/2 h-4 bg-green-500/70 rounded-md self-center"></div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffdd40] to-pink-500 flex items-center justify-center text-[11px] font-bold text-black border border-white/10 select-none">
                  SP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Glassmorphism Login</h4>
                  <span className="text-xs text-gray-500">Sophia</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(5, e)}
                  className="flex items-center gap-1.5 hover:text-red-500 text-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-xs font-semibold">{likes[5]}</span>
                </button>
                <span className="bg-[#47cf73]/10 text-[#47cf73] text-[9px] px-2 py-0.5 rounded font-black">PRO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-12">
          <Button name="Next Page" variant="secondary" className="px-10" />
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1e1f26]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">A front-end environment made for testing and sharing</h2>
          <Link to={user ? '/code' : '/signup'}>
            <Button name="Explore the Editor" variant="outline" className="mt-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Tabs Navigation (Left Column) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {[
              {
                title: 'Support For the Way You Code',
                desc: 'Write HTML, CSS, JavaScript directly, or use popular CSS preprocessors like Sass and compilers.',
              },
              {
                title: 'Keep Your Pens Private',
                desc: 'PRO members can save their code snippets privately. Share only what you want, when you want.',
              },
              {
                title: 'Embed Pens Everywhere',
                desc: 'Easily embed code samples and interactive results into blogs, documentation, or portfolios.',
              },
              {
                title: 'Premium Asset Hosting',
                desc: 'Upload image assets, custom style rules, and data files directly to CodeBox servers.',
              },
              {
                title: 'Real-time Collab Mode',
                desc: 'Collaborate live with your developer team. Code, review, and chat inside a unified pane.',
              },
            ].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#1e1f26] border-l-4 border-l-[#47cf73] border-t-white/10 border-b-white/5 border-x-white/5 shadow-xl'
                    : 'bg-transparent border-transparent hover:bg-white/3'
                }`}
              >
                <h4 className={`text-base font-bold mb-1 transition-colors ${activeTab === idx ? 'text-[#47cf73]' : 'text-white'}`}>
                  {tab.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">{tab.desc}</p>
              </button>
            ))}
          </div>

          {/* Interactive Tab Showcase Mockups (Right Column) */}
          <div className="lg:col-span-7 bg-[#131417] border border-[#2c303d] rounded-xl overflow-hidden shadow-2xl h-[380px] flex flex-col justify-between">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0b0c10] border-b border-[#2c303d]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 font-mono">
                {activeTab === 0 && 'Preprocessors'}
                {activeTab === 1 && 'Private Settings'}
                {activeTab === 2 && 'Embed Configurator'}
                {activeTab === 3 && 'Asset Manager'}
                {activeTab === 4 && 'Collab Active Session'}
              </span>
              <div className="w-10"></div>
            </div>

            {/* Display Pane Content */}
            <div className="p-8 flex-1 flex items-center justify-center overflow-hidden">
              {/* Tab 0: Preprocessors */}
              {activeTab === 0 && (
                <div className="w-full max-w-md space-y-4 font-mono text-xs text-gray-400">
                  <div className="bg-[#1e1f26] p-3 rounded-lg border border-white/5">
                    <span className="text-pink-500">scss</span>
                    <p className="text-gray-300 mt-1">
                      $primary-color: <span className="text-[#0ebeff]">#47cf73</span>;<br />
                      .btn &#123; background: $primary-color; &#125;
                    </p>
                  </div>
                  <div className="bg-[#1e1f26] p-3 rounded-lg border border-white/5">
                    <span className="text-yellow-500">pug</span>
                    <p className="text-gray-300 mt-1">
                      button.btn Click Me!
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-2 rounded bg-[#47cf73] text-black font-bold font-sans w-24 text-center cursor-pointer select-none">
                    Click Me!
                  </div>
                </div>
              )}

              {/* Tab 1: Private Setting Lock */}
              {activeTab === 1 && (
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-500">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">This Pen is Locked & Private</h3>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Restricted visibility. Only you can view or edit this file unless shared via a secure secure token.
                  </p>
                </div>
              )}

              {/* Tab 2: Embed Code View */}
              {activeTab === 2 && (
                <div className="w-full max-w-md space-y-3">
                  <span className="text-xs text-gray-500 font-mono">HTML Embed Code:</span>
                  <div className="bg-[#0b0c10] p-3 rounded-lg border border-white/10 font-mono text-[10px] text-green-400 select-all overflow-x-auto whitespace-nowrap">
                    &lt;iframe src=&quot;https://codebox.io/embed/latest&quot; style=&quot;width: 100%; height: 300px;&quot;&gt;&lt;/iframe&gt;
                  </div>
                  <p className="text-xs text-gray-400">
                    Copy and paste the HTML snippet above to load this visual editor in any other site framework.
                  </p>
                </div>
              )}

              {/* Tab 3: Asset Manager */}
              {activeTab === 3 && (
                <div className="w-full max-w-md space-y-2.5">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-[#2c303d]">
                    <span className="font-bold text-gray-400">Project Assets</span>
                    <button className="text-[#47cf73] hover:underline cursor-pointer font-semibold text-[11px]">Upload Asset</button>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: 'logo.svg', type: 'Vector Image', size: '12 KB' },
                      { name: 'styles.css', type: 'Stylesheet', size: '24 KB' },
                      { name: 'background.png', type: 'PNG Image', size: '2.4 MB' },
                    ].map((asset, index) => (
                      <div key={index} className="flex justify-between items-center bg-[#1e1f26] p-2.5 rounded border border-white/5 text-xs">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="font-bold text-white">{asset.name}</span>
                          <span className="text-[10px] text-gray-500">({asset.type})</span>
                        </div>
                        <span className="font-mono text-gray-400 text-[10px]">{asset.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Collab Mode typing cursor */}
              {activeTab === 4 && (
                <div className="w-full max-w-md space-y-4 relative">
                  <div className="flex justify-start gap-1 items-center pb-2 border-b border-[#2c303d]">
                    <span className="text-[10px] text-gray-500 font-mono">Active Editors:</span>
                    <div className="flex -space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500 border border-[#131417] text-[8px] flex items-center justify-center font-bold text-black">JD</div>
                      <div className="w-5 h-5 rounded-full bg-pink-500 border border-[#131417] text-[8px] flex items-center justify-center font-bold text-black">LM</div>
                      <div className="w-5 h-5 rounded-full bg-[#47cf73] border border-[#131417] text-[8px] flex items-center justify-center font-bold text-black">ME</div>
                    </div>
                  </div>
                  <div className="bg-[#1e1f26] p-4 rounded-lg border border-white/5 font-mono text-xs space-y-1 relative min-h-[100px]">
                    <div>
                      <span className="text-pink-400">function</span> <span className="text-blue-400">initCollab</span>() &#123;
                    </div>
                    <div className="pl-4">
                      console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&quot;Running together!&quot;</span>);
                      <span className="inline-block w-[1.5px] h-3.5 bg-pink-500 animate-pulse ml-0.5 relative top-0.5">
                        <span className="absolute bottom-4 left-0 bg-pink-500 text-black font-sans text-[8px] px-1 rounded whitespace-nowrap font-bold">Liam typing</span>
                      </span>
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer Info inside code tab */}
            <div className="px-6 py-4 bg-[#0b0c10] border-t border-[#2c303d] flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>Status: Active Connection</span>
              <span>Latency: 12ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Quickstart Grid Row */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1e1f26] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Logos Container */}
        <div className="lg:col-span-7 grid grid-cols-5 gap-4">
          {[
            {
              name: 'React',
              color: 'hover:border-[#0ebeff]/50 hover:bg-[#0ebeff]/5 text-[#0ebeff]',
              svg: (
                <svg className="w-10 h-10 animate-spin-slow" viewBox="-11.5 -10.23 23 20.46" fill="currentColor">
                  <circle cx="0" cy="0" r="2.05" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              ),
            },
            {
              name: 'Vue',
              color: 'hover:border-[#42b883]/50 hover:bg-[#42b883]/5 text-[#42b883]',
              svg: (
                <svg className="w-10 h-10 hover:scale-110 transition-transform" viewBox="0 0 256 221" fill="currentColor">
                  <path d="M204.8 0H256L128 220.8L0 0h97.3l30.7 53.2L158.7 0h46.1z" />
                  <path d="M0 0l128 220.8L256 0h-51.2L128 132.5L51.2 0H0z" fill="#41B883" />
                  <path d="M51.2 0L128 132.5L204.8 0h-46.1L128 53.2L70.4 0H51.2z" fill="#35495E" />
                </svg>
              ),
            },
            {
              name: 'Tailwind',
              color: 'hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/5 text-[#38bdf8]',
              svg: (
                <svg className="w-10 h-10 hover:translate-y-[-4px] transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
              ),
            },
            {
              name: 'Sass',
              color: 'hover:border-[#cf649a]/50 hover:bg-[#cf649a]/5 text-[#cf649a]',
              svg: (
                <svg className="w-10 h-10 hover:scale-110 transition-transform" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M92.1 41.5C87.6 25 72.8 12.7 54.9 12.7c-21 0-38 17-38 38 0 7.8 2.4 15.1 6.4 21.1L12.4 82.7c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l11.4-11.4c6.1 4.7 13.8 7.5 22.1 7.5 21 0 38-17 38-38 0-.8-.1-1.6-.2-2.3 3.3-2 5.5-5.6 5.5-9.8.1-6.1-4.8-11.1-10.9-10.8zM52.8 77.8c-15.3 0-27.8-12.5-27.8-27.8S37.5 22.2 52.8 22.2s27.8 12.5 27.8 27.8c0 .2 0 .5-.1.7-1.3-.4-2.7-.6-4.2-.6-8.2 0-14.9 6.7-14.9 14.9.1 5.9 3.6 10.9 8.7 13.2-3.1 3.5-7.5 5.6-12.5 5.6z" />
                </svg>
              ),
            },
            {
              name: 'GSAP',
              color: 'hover:border-[#88ce02]/50 hover:bg-[#88ce02]/5 text-[#88ce02]',
              svg: (
                <div className="font-black tracking-tighter text-2xl hover:scale-110 transition-transform font-mono uppercase">GSAP</div>
              ),
            },
          ].map((tech, idx) => (
            <div
              key={idx}
              className={`border border-[#2c303d] rounded-xl h-24 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${tech.color}`}
            >
              {tech.svg}
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Tech Right Text */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-3xl font-black leading-tight text-white">Get Started Quicker</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Jump start your builds with templates and boilerplate files for your favorite JS libraries, style frameworks,
            compilers, and layout tools.
          </p>
          <Button name="Explore Topics" variant="outline" className="px-6" />
        </div>
      </section>

      {/* MongoDB promo banner */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-t border-[#1e1f26]">
        <div className="bg-gradient-to-r from-[#001e2b] via-[#002f43] to-[#01141d] border border-[#00684a]/30 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#001e2b] flex items-center justify-center border border-[#00684a]/50 text-[#00ed64]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.5 6.4 8 10.9 8 13.5c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-2.6-1.5-7.1-4-11.5zm0 13.5c-.8 0-1.5-.7-1.5-1.5S11.2 12.5 12 12.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-black text-[#00ed64] uppercase tracking-wider">MongoDB &amp; Atlas</h4>
              <p className="text-xs text-gray-400 max-w-lg mt-1">
                MongoDB Atlas is the developer data platform that handles building and scaling apps, no matter your SQL dialog.
                Enjoy native vector search, L13+ regions, and flexible document modeling.
              </p>
            </div>
          </div>
          <a href="https://mongodb.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <Button name="Start Free Trial" className="w-full bg-[#00ed64] hover:bg-[#00c954] text-black font-bold px-6 py-3 rounded-lg" />
          </a>
        </div>
      </section>

      {/* Bring the Whole Team Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1e1f26]">
        <div className="bg-[#131417] border border-[#2c303d] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffbd2e]/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#47cf73]/5 rounded-full blur-2xl pointer-events-none"></div>

          <h3 className="text-3xl md:text-4xl font-black text-white">Bring the Whole Team</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Software development is a team sport. Upgrade to a <span className="text-[#ffbd2e] font-black bg-[#ffbd2e]/10 px-2 py-0.5 rounded">TEAM</span> membership
            to build code in a collaborative sandbox. Sync edits, host assets, set presentation mode, and review files together.
          </p>

          <div className="pt-2">
            <Button name="Start a Team" variant="primary" className="px-8 py-3.5 bg-[#47cf73] font-bold text-black rounded-lg" />
          </div>

          {/* Logos Subtitle */}
          <div className="pt-8">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Loved by hundreds of teams, including:</p>
            {/* Logos Grid */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40 hover:opacity-70 transition-opacity">
              {/* Airbnb logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono">Airbnb</span>
              {/* Grubhub logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono">Grubhub</span>
              {/* Netflix logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono text-red-500">Netflix</span>
              {/* Adobe logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono">Adobe</span>
              {/* Salesforce logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono text-blue-400">Salesforce</span>
              {/* Microsoft logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono">Microsoft</span>
              {/* Lyft logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono text-pink-400">Lyft</span>
              {/* IBM logo mock */}
              <span className="font-black text-sm text-gray-400 uppercase tracking-widest font-mono">IBM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#010101] border-t border-[#1e1f26] py-16 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">CodeBox</h4>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">About</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Press</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Shop</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Podcast</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Documentation</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Support</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Advertise</span>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">For</h4>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Teams</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Education</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Privacy</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Writing</span>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Social</h4>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">YouTube</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Bluesky</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Mastodon</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Instagram</span>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Community</h4>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Spark</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Challenges</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Topics</span>
            <span className="text-xs text-gray-500 hover:text-[#47cf73] transition-colors cursor-pointer">Code of Conduct</span>
          </div>

          {/* Brand/Legal (Col 5) */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end space-y-4 md:text-right">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z" />
              </svg>
              <span className="font-bold text-white tracking-widest text-lg">CODEBOX</span>
            </div>
            <p className="text-[10px] text-gray-600 leading-normal">
              &copy; 2026 CodeBox Sandbox Demo.<br />
              CodeBox is a registered trademark.<br />
              All visual designs match CodePen.
            </p>
            <div className="flex gap-3 text-[10px] text-gray-500">
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span>&bull;</span>
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home