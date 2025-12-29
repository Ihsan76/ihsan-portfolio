// src/app/portfolio/page.tsx - الكود الكامل المُصحح
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Afaq - منصة تعليم وعمل',
    description: 'منصة تعليمية وعمل متعددة اللغات مع Django backend وReact frontend. تشمل نظام حجوزات، dashboard، وإدارة محتوى.',
    image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Afaq',
    github: 'https://github.com/Ihsan76/afaq',
    live: 'https://github.com/Ihsan76/afaq',
    tech: ['React', 'Django', 'PostgreSQL', 'Railway']
  },
  {
    id: 2,
    title: 'Social Media App',
    description: 'تطبيق إدارة وسائل التواصل الاجتماعي مع frontend متجاوب وbackend قوي. يدعم النشر المتعدد والجدولة.',
    image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Social+App',
    github: 'https://github.com/Ihsan76/socialmedia_app',
    live: 'https://github.com/Ihsan76/socialmedia_app',
    tech: ['React', 'Django', 'APIs', 'Responsive']
  },
  {
    id: 3,
    title: 'إحسان الشامي - Portfolio',
    description: 'موقع شخصي احترافي بـNext.js 16 مع تصميم عصري، Contact Form تفاعلي، وتجربة مستخدم متجاوبة.',
    image: 'https://via.placeholder.com/400x250/6366F1/FFFFFF?text=Portfolio',
    github: 'https://github.com/Ihsan76/ihsan-portfolio',
    live: 'https://ihsan-portfolio.vercel.app/',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind', 'React']
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 dir-rtl">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            أعمالي
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            أبرز المشاريع التي طورتها باستخدام أحدث التقنيات
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl">
              {/* Image */}
              <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-500 h-48 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-white/50 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                >
                  عرض الموقع
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            تريد مشروعاً مميزاً؟ تواصل معي الآن! 🚀
          </Link>
        </div>
      </div>
    </main>
  )
}
