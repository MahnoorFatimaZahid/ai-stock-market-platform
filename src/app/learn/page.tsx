import React from 'react';

export default function LearningHubPage() {
  const learningCards = [
    {
      title: 'Stock Market Basics',
      description: 'Learn how stocks work, how markets move, and how investors build wealth over time.',
      lessons: '12 Lessons',
    },
    {
      title: 'Technical Analysis',
      description: 'Understand candlestick patterns, support/resistance, trends, and trading psychology.',
      lessons: '18 Lessons',
    },
    {
      title: 'AI Investing',
      description: 'Discover how AI is transforming modern investing and market intelligence.',
      lessons: '9 Lessons',
    },
    {
      title: 'Risk Management',
      description: 'Learn portfolio diversification, position sizing, and strategies to reduce losses.',
      lessons: '14 Lessons',
    },
  ];

  const featuredArticles = [
    { title: 'How To Analyze Stocks Like A Professional Investor', category: 'Investing' },
    { title: 'Top AI Tools Transforming Financial Markets', category: 'AI & Finance' },
    { title: 'Understanding Market Volatility During Earnings Season', category: 'Market Analysis' },
  ];

  const stats = [
    { label: 'Learning Guides', value: '120+' },
    { label: 'Video Lessons', value: '80+' },
    { label: 'Market Tutorials', value: '40+' },
    { label: 'Active Learners', value: '50K+' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-400 font-sans">
      {/* HEADER SECTION */}
     

      <main className="container py-16 space-y-24">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="home-wrapper">
            <span className="news-tag !text-red-500 !bg-red-500/10">Education Portal</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-100 leading-tight">
              Master Markets <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                With Intelligence
              </span>
            </h1>
            <p className="max-w-lg text-lg text-gray-500">
              High-performance financial education. We provide the blueprints; you build the wealth.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="yellow-btn px-8">Start Learning</button>
              <button className="h-12 px-8 border border-gray-600 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors uppercase text-sm font-bold">
                View Courses
              </button>
            </div>
          </div>

          {/* TELEMETRY / STATS CARD */}
          <div className="bg-gray-800 border border-gray-600 rounded-xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-gray-100 font-bold uppercase tracking-widest text-sm">Course Progress</h3>
              <span className="text-red-500 font-mono font-bold">LVL_04</span>
            </div>
            <div className="space-y-6">
              {[74, 52, 91].map((val, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase">
                    <span>Module 0{i + 1}</span>
                    <span className="text-gray-100">{val}%</span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS GRID */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-800 border border-gray-600 p-6 rounded-lg group hover:border-red-500 transition-colors">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">{s.label}</p>
              <h3 className="text-4xl font-bold text-gray-100 ">{s.value}</h3>
            </div>
          ))}
        </section>

        {/* COURSE LIST */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-gray-100 uppercase tracking-tighter">Learning Tracks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {learningCards.map((card) => (
              <div key={card.title} className="news-item flex flex-col justify-between h-full">
                <div>
                  <span className="news-tag">{card.lessons}</span>
                  <h3 className="news-title mt-4 text-2xl">{card.title}</h3>
                  <p className="news-summary mt-2">{card.description}</p>
                </div>
                <button className="news-cta mt-6 w-fit font-bold uppercase tracking-widest">
                  Enroll Unit →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED ARTICLES */}
        <section className="space-y-8 pb-20">
          <h2 className="text-2xl font-bold text-gray-100 uppercase italic">Research Index</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <div key={article.title} className="bg-gray-800 border border-gray-600 p-6 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-all">
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-4">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-gray-100 leading-tight">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}