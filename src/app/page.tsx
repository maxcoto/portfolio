import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Shield,
  Zap,
  Brain,
  Award,
  Calendar
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background elements */}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-cyan-500/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-cyan-400 font-mono hidden sm:inline">maxcoto.eth</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 blur-md animate-spin"
                  style={{animationDuration: '3s'}}
                >
                </div>
                <div className="absolute inset-0 rounded-full bg-black h-40"></div>
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="relative z-10 rounded-full object-cover size-40 aspect-square border border-cyan-400/40 shadow-xl shadow-cyan-400/30"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Max Coto
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-xl md:text-2xl text-gray-300">
                Smart Contract Engineer | DeFi Protocol Builder | Security Researcher
              </p>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Software Engineer with 14+ years of experience, including 4+ years specializing in DeFi and smart contract development.
              Building the future of decentralized finance with AI-powered protocols.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>

              <p className="text-lg text-gray-300 mb-6">
                Specialized in building innovative DeFi protocols including vault systems, lending platforms,
                and AI-powered trading interfaces. My work focuses on creating secure, efficient, and user-friendly
                solutions that push the boundaries of decentralized finance.
              </p>
              <p className="text-lg text-gray-300">
                Currently, I&apos;m leading the development of cutting-edge DeFi protocols at Maxos, where I combine
                traditional software engineering principles with blockchain innovation to build the next generation
                of financial infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 text-center border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:animate-pulse">14+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 text-center border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:animate-pulse">4+</div>
                <div className="text-gray-300">DeFi Specialization</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 text-center border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:animate-pulse">10+</div>
                <div className="text-gray-300">DeFi Projects</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 text-center border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:animate-pulse">2+</div>
                <div className="text-gray-300">Security Audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* StakB */}
            <a
              href="https://app.stak.fund"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer block"
            >
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/projects/stak.jpg"
                  alt="Stak - Launchpad for DATs, SPACs, and ICOs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Stak</h3>
                  <p className="text-gray-400 text-sm">Launchpad for DATs, SPACs, and ICOs</p>
                </div>
              </div>
              <p className="text-gray-300">
                Designed a launchpad for DATs, SPACs, and ICOs with a focus on security and compliance.
              </p>
            </a>

            {/* Vibestation */}
            <a
              href="https://aiscan.build"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer block"
            >
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/projects/vibestation.jpg"
                  alt="Vibestation - AI-Powered DeFi UI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Vibestation</h3>
                  <p className="text-gray-400 text-sm">AI-Powered DeFi UI</p>
                </div>
              </div>
              <p className="text-gray-300">
                Built AI-powered DeFi UI enabling natural-language &quot;vibe trading&quot; across Uniswap/LiFi with
                EVM-MCP integration.
              </p>
            </a>

            {/* DagSwap */}
            <a
              href="https://dag-swap.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer block"
            >
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/projects/dagswap.jpg"
                  alt="DagSwap - Uniswap v4 Fork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DagSwap</h3>
                  <p className="text-gray-400 text-sm">Uniswap v4 Fork</p>
                </div>
              </div>
              <p className="text-gray-300">
                Developed Uniswap v4 fork for BlockDAG chain with custom liquidity hooks and advanced trading features.
              </p>
            </a>

            {/* Taiser */}
            <a
              href="https://taiser.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer block"
            >
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/projects/taiser.jpg"
                  alt="Taiser - Funding Protocol"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Taiser</h3>
                  <p className="text-gray-400 text-sm">Funding Protocol</p>
                </div>
              </div>
              <p className="text-gray-300">
                Created funding protocol for VC deals from tweets, leveraging custom bonding curves and
                closing strategies.
              </p>
            </a>

            {/* Sweep */}
            <a
              href="https://sweepr.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer block"
            >
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/projects/sweep.jpg"
                  alt="Sweep - Lending Protocol"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sweep</h3>
                  <p className="text-gray-400 text-sm">Lending Protocol</p>
                </div>
              </div>
              <p className="text-gray-300">
                Built lending protocol with junior/senior tranches and cross-chain OFT integration (LayerZero).
                Collaborated in 2 external audits.
              </p>
            </a>

            {/* Slither-UI */}
            <a
              href="https://readstorage.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer block"
            >
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/projects/slither.jpg"
                  alt="Slither-UI - Security Tool"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Slither-UI</h3>
                  <p className="text-gray-400 text-sm">Security Tool</p>
                </div>
              </div>
              <p className="text-gray-300">
                Implemented front-end for Slither security tool to analyze contract slots across chains.
                Open-source contribution to blockchain security.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                Languages
              </h3>
              <div className="space-y-2">
                {['Solidity', 'JavaScript', 'Ruby', 'Elixir', 'C', 'C++'].map((skill) => (
                  <div key={skill} className="text-gray-300">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Frameworks & Tools
              </h3>
              <div className="space-y-2">
                {['Foundry', 'Hardhat', 'OpenZeppelin', 'Remix', 'NodeJS', 'ReactJS', 'NextJS', 'GraphQL'].map((skill) => (
                  <div key={skill} className="text-gray-300">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                AI / Agents
              </h3>
              <div className="space-y-2">
                {['Cursor', 'Claude', 'LangChain', 'Eliza'].map((skill) => (
                  <div key={skill} className="text-gray-300">{skill}</div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                Security & Analysis
              </h3>
              <div className="space-y-2">
                {['Slither', 'Deth.net', 'Tenderly', 'Etherscan', 'Metamask'].map((skill) => (
                  <div key={skill} className="text-gray-300">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let&apos;s Build the Future of DeFi</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://calendly.com/maxiperezc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </a>
            <a
              href="https://linkedin.com/in/maxiperezc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/maxcoto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>

          {/* Additional Contact Info */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://app.ens.domains/maxcoto.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              maxcoto.eth
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Max Coto. Building the future of decentralized finance.
          </p>
        </div>
      </footer>
    </div>
  );
}
