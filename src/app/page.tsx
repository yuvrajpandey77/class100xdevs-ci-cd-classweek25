export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 py-32 relative">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Next Generation
              <br />
              Web Platform
            </h1>
            <p className="text-xl text-center mb-12 max-w-2xl text-gray-400">
              Experience the future of web development with our cutting-edge Next.js platform. 
              Built for performance, designed for innovation.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Launch Project
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Performance</h3>
              <p className="text-gray-400">Optimized for speed with advanced caching and edge computing capabilities.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-4xl mb-6">🔒</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Enterprise Security</h3>
              <p className="text-gray-400">Built-in security features and compliance with industry standards.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-4xl mb-6">🌐</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Global Scale</h3>
              <p className="text-gray-400">Deploy anywhere with our distributed edge network infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Ready to Build the Future?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Join the next generation of developers building the future of web applications.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-gray-700 text-white px-8 py-4 rounded-md font-semibold hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
