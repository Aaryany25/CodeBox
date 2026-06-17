import  { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

interface SignUpProps {
  user: any
  SignInWithGoogle: () => void
}

function SignUp({ user, SignInWithGoogle }: SignUpProps) {
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/code')
    }
  }, [user, navigate])

  return (
    <div className="w-full min-h-screen bg-[#0f1015] text-white flex flex-col md:flex-row font-sans selection:bg-[#47cf73]/30 selection:text-[#47cf73]">
      {/* Left Panel: Branding and Feature List */}
      <div className="w-full md:w-[55%] bg-[#010101] border-r border-[#1e1f26] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Glow Node */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#47cf73]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0ebeff]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Brand Header */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl group z-10">
          <svg
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z" />
          </svg>
          <span className="tracking-wider text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            CodeBox
          </span>
        </Link>

        {/* Feature Highlights */}
        <div className="my-12 md:my-auto max-w-lg z-10 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
            Unlock the full power of web development.
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Create an account to gain instant access to our real-time sandboxed editor, private storage, and developer sharing community.
          </p>

          <div className="space-y-6 pt-4">
            {[
              {
                title: 'Real-time HTML/CSS/JS Sandbox',
                desc: 'See your changes instantly with zero configuration. Add preprocessors, libraries, and custom assets in seconds.',
                color: 'text-[#ffdd40] bg-[#ffdd40]/10 border-[#ffdd40]/20',
                svg: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Private & Secure Projects',
                desc: 'Keep sensitive work hidden from the public gallery. Toggle visibility permissions with a single click.',
                color: 'text-[#ae63e4] bg-[#ae63e4]/10 border-[#ae63e4]/20',
                svg: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: 'Collab & Live Review Mode',
                desc: 'Invite other creators to review or code alongside you. Sync editor changes in real-time with cursor overlays.',
                color: 'text-[#0ebeff] bg-[#0ebeff]/10 border-[#0ebeff]/20',
                svg: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                  {feature.svg}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{feature.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Footer */}
        <p className="text-[10px] text-gray-600 mt-6 z-10">
          &copy; 2026 CodeBox. Visual layout matches CodePen styles.
        </p>
      </div>

      {/* Right Panel: Authentication Form */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-8 md:p-16 relative">
        <div className="w-full max-w-sm flex flex-col space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-white">Get Started</h2>
            <p className="text-sm text-gray-400">Join our social coding platform for free.</p>
          </div>

          {/* Social Authentication Box */}
          <div className="bg-[#1e1f26] border border-[#2c303d] rounded-2xl p-6 space-y-6">
            <h3 className="text-xs font-black uppercase text-gray-400 tracking-wider">Authentication Provider</h3>
            
            <button
              onClick={SignInWithGoogle}
              className="w-full bg-[#131417] hover:bg-[#252830] text-white border border-[#2c303d] hover:border-gray-500 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all cursor-pointer group active:scale-[0.98]"
            >
              {/* Official Google Color SVG */}
              <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="h-[1px] bg-[#2c303d] flex-1"></div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">or</span>
              <div className="h-[1px] bg-[#2c303d] flex-1"></div>
            </div>

            {/* Email form disabled placeholder */}
            <div className="space-y-4 opacity-50 select-none pointer-events-none">
              <div>
                <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  disabled
                  className="w-full bg-[#131417] border border-[#2c303d] rounded-lg p-2.5 text-xs text-gray-500"
                />
              </div>
              <div className="w-full bg-[#2c303d] text-center text-xs py-2.5 rounded-lg font-bold text-gray-500">
                Continue with Email
              </div>
            </div>
          </div>

          {/* Return Links */}
          <div className="flex justify-between items-center text-xs text-gray-500 px-2">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
            <div className="flex gap-2">
              <span className="hover:underline cursor-pointer">Help</span>
              <span>&bull;</span>
              <span className="hover:underline cursor-pointer">Privacy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
