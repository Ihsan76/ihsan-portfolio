// src/app/page.tsx - الكود الأصلي النظيف (بدون أخطاء)
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white dir-rtl">
      <div className="container mx-auto px-6 py-24 text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
            إحسان الشامي
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            مطور ويب Full-Stack محترف | 
            <span className="font-semibold text-yellow-300"> React • Next.js • Django • APIs</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/portfolio" 
              className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              شاهد أعمالي →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white/50 px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 backdrop-blur-sm"
            >
              تواصل معي
            </Link>
          </div>
          <p className="mt-8 text-lg opacity-90 font-medium">
            جاهز لتحويل أفكارك إلى مواقع وتطبيقات مذهلة 🚀
          </p>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto opacity-90">
          {['React', 'Next.js', 'Django', 'TypeScript', 'Tailwind'].map((tech, i) => (
            <div key={i} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">{tech.charAt(0)}</span>
              </div>
              <p className="font-semibold text-lg">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
