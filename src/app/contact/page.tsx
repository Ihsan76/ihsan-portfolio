// src/app/contact/page.tsx - بياناتك الحقيقية
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // سيتم ربط Django API لاحقاً
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 dir-rtl">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            تواصل معي
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            جاهز لتحويل أفكارك إلى واقع – ابدأ مشروعك الآن!
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-500/20 border border-green-400/50 backdrop-blur-xl rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">شكراً لك! 📧</h2>
            <p className="text-xl mb-8">تم إرسال رسالتك بنجاح، سأتواصل معك قريباً.</p>
            <Link href="/" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all">
              العودة للرئيسية
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <label className="block text-lg font-semibold mb-3">الاسم الكامل</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:border-purple-400 focus:outline-none transition-all text-lg"
                placeholder="إحسان الشامي"
              />
            </div>
            
            <div>
              <label className="block text-lg font-semibold mb-3">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:border-purple-400 focus:outline-none transition-all text-lg"
                placeholder="ihsan.afaqapp@gmail.com"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold mb-3">رسالتك / تفاصيل المشروع</label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:border-purple-400 focus:outline-none transition-all text-lg resize-vertical"
                placeholder="أخبرني عن فكرتك، نوع المشروع، الميزانية، والموعد النهائي..."
              />
            </div>
            
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                إرسال الطلب 🚀
              </button>
              <Link 
                href="/portfolio"
                className="flex-1 border-2 border-white/50 px-12 py-6 rounded-2xl font-bold text-xl text-center hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
              >
                شاهد أعمالي
              </Link>
            </div>
          </form>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto text-center">
  <a 
    href="mailto:ihsan.afaqapp@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group p-8 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all"
  >
    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all">
      <span className="text-2xl font-bold">📧</span>
    </div>
    <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
    <p className="opacity-90 text-lg break-all">ihsan.afaqapp@gmail.com</p>
  </a>

  <a 
    href="https://wa.me/962788477748" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group p-8 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all"
  >
    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all">
      <span className="text-2xl font-bold">💬</span>
    </div>
    <h3 className="text-xl font-bold mb-2">واتساب</h3>
    <p className="opacity-90 text-lg">+962 7884 77748</p>
  </a>

  <a 
    href="https://twitter.com/ihsan_alshami" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group p-8 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all"
  >
    <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all">
      <span className="text-2xl font-bold">🐦</span>
    </div>
    <h3 className="text-xl font-bold mb-2">تويتر</h3>
    <p className="opacity-90 text-lg">@ihsan_alshami</p>
  </a>

  <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl">
    <h3 className="text-xl font-bold mb-4">وسائل التواصل</h3>
    <div className="flex flex-col gap-2">
      <a href="https://instagram.com/ihsan.alshami" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 font-semibold">@ihsan.alshami</a>
      <a href="https://facebook.com/ihsan.alshami" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">@ihsan.alshami</a>
      <a href="https://threads.net/@ihsan.alshami" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold">@ihsan.alshami</a>
    </div>
  </div>
</div>
      </div>
    </main>
  )
}
