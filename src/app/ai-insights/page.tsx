import React from 'react';

export default function AIInsightsPage() {
  const aiSignals = [
    {
      stock: 'NVDA',
      company: 'NVIDIA Corporation',
      confidence: '94%',
      sentiment: 'Bullish',
      summary: 'AI demand and institutional buying continue driving strong semiconductor momentum.',
    },
    {
      stock: 'TSLA',
      company: 'Tesla Inc.',
      confidence: '81%',
      sentiment: 'Neutral',
      summary: 'Short-term volatility remains high while long-term growth sentiment stays positive.',
    },
    {
      stock: 'AAPL',
      company: 'Apple Inc.',
      confidence: '89%',
      sentiment: 'Bullish',
      summary: 'Strong earnings expectations and ecosystem expansion continue supporting momentum.',
    },
  ];

  const metrics = [
    { title: 'AI Signals Today', value: '1,284', growth: '+18%' },
    { title: 'Predictions Accuracy', value: '94%', growth: '+6%' },
    { title: 'Stocks Analyzed', value: '12K+', growth: '+22%' },
    { title: 'Market Alerts', value: '240K', growth: '+31%' },
  ];

  const insights = [
    {
      title: 'Semiconductor Momentum',
      description: 'AI models predict continued upside potential in semiconductor and GPU-related stocks.',
    },
    {
      title: 'Institutional Buying Activity',
      description: 'Large-cap technology equities are seeing increased institutional accumulation.',
    },
    {
      title: 'Market Volatility Outlook',
      description: 'Short-term volatility expected around earnings season and macroeconomic data releases.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 selection:bg-yellow-400 selection:text-gray-950">
      <main className="container py-20 space-y-20">
        
        {/* HERO - Minimalist & High Contrast */}
        <section className="max-w-4xl">
          <span className="news-tag uppercase tracking-[0.2em] mb-6">Intelligence Report </span>
          <h1 className="text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Market <br />
Signals
          </h1>
          <p className="mt-8 text-gray-500 text-xl max-w-2xl font-medium leading-relaxed">
            Deterministic AI analysis for equity markets. We process institutional data streams to provide high-confidence investment blueprints.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="yellow-btn px-10 uppercase tracking-widest">Connect API</button>
            <button className="h-12 px-8 border border-gray-600 hover:bg-gray-800 text-gray-400 rounded-lg transition-colors font-medium">
              System Logs
            </button>
          </div>
        </section>

        {/* METRICS - Grid with Industrial Borders */}
        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-0 border border-gray-700">
          {metrics.map((metric) => (
            <div key={metric.title} className="p-8 border-r border-b border-gray-700 last:border-r-0 hover:bg-gray-800 transition-colors">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{metric.title}</p>
              <h3 className="text-4xl font-bold tracking-tighter mb-4">{metric.value}</h3>
              <span className="px-2 py-1 text-[10px] font-bold rounded bg-teal-400/10 text-teal-400">
                {metric.growth}
              </span>
            </div>
          ))}
        </section>

        {/* MAIN ANALYSIS FEED */}
        <section className="grid lg:grid-cols-[1fr_350px] gap-12">
          
          {/* AI SIGNALS LIST */}
          <div className="space-y-8">
            <h3 className="watchlist-title uppercase tracking-widest border-l-4 border-yellow-400 pl-4">Priority Signals</h3>
            <div className="space-y-4">
              {aiSignals.map((signal) => (
                <div 
                  key={signal.stock} 
                  className="bg-gray-800 border-6 border-gray-900 rounded-xl overflow-hidden hover:border-gray-700 transition-colors"
                >
                  <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="px-3 py-1 bg-gray-900 border border-gray-700 text-yellow-400 font-mono text-sm font-bold">
                          {signal.stock}
                        </div>
                        <h4 className="text-xl font-bold uppercase tracking-tight">{signal.company}</h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed max-w-xl">{signal.summary}</p>
                      <div className="mt-4 flex gap-4 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        <span>Sentiment: <span className={signal.sentiment === 'Bullish' ? 'text-teal-400' : 'text-gray-100'}>{signal.sentiment}</span></span>
                        <span>Source: Neural_Node_04</span>
                      </div>
                    </div>
                    
                    <div className="md:w-32 flex flex-col items-center justify-center border-l border-gray-700 md:pl-6">
                      <span className="text-[10px] font-mono text-gray-500 uppercase mb-1">Confidence</span>
                      <span className="text-4xl font-black text-gray-100 tracking-tighter">{signal.confidence}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR INSIGHTS */}
          <div className="space-y-10">
            <div className="p-8 border border-gray-700 bg-gray-800/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-gray-700">SYS_AUTH_01</div>
              <h3 className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-6">Market Outlook</h3>
              <div className="space-y-8">
                {insights.map((item) => (
                  <div key={item.title} className="group cursor-default">
                    <h4 className="text-sm font-bold uppercase text-gray-100 group-hover:text-yellow-400 transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-1 bg-yellow-400">
              <div className="bg-gray-900 p-6">
                <h4 className="text-sm font-black uppercase text-gray-100 mb-2">System Update</h4>
                <p className="text-xs text-gray-500 leading-normal">
                  Neural weights adjusted for Q2 earnings volatility. Accuracy delta: +2.1%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA - Blueprint Block */}
        <section className="border-t-2 border-dashed border-gray-700 pt-20">
          <div className="bg-gray-800 border-6 border-gray-900 p-12 text-center space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Scale Your Intelligence</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-medium">
              Join 40k+ institutional traders using Signalist AI for high-frequency market modeling.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="yellow-btn px-12 uppercase tracking-widest">Upgrade Now</button>
              <button className="h-12 px-8 border border-gray-600 hover:bg-gray-700 text-gray-400 rounded-lg transition-colors font-medium uppercase tracking-widest text-sm">
                Documentation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}