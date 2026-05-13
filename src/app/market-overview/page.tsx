import React from 'react';

export default function MarketOverviewPage() {
  const tickerItems = [
    { symbol: 'AAPL', price: '+2.14%' },
    { symbol: 'TSLA', price: '-1.08%' },
    { symbol: 'NVDA', price: '+5.91%' },
    { symbol: 'BTC', price: '+3.24%' },
    { symbol: 'META', price: '+1.88%' },
  ];

  const stats = [
    { title: 'S&P 500', value: '5,412.22', change: '+1.8%' },
    { title: 'NASDAQ', value: '17,901.33', change: '+2.4%' },
    { title: 'BTC/USD', value: '$68,420', change: '+3.1%' },
    { title: 'Market Cap', value: '$108T', change: '+0.9%' },
  ];

  const movers = [
    { symbol: 'NVDA', company: 'NVIDIA Corp.', change: '+8.2%' },
    { symbol: 'AMD', company: 'Advanced Micro Devices', change: '+6.4%' },
    { symbol: 'PLTR', company: 'Palantir Technologies', change: '+5.8%' },
    { symbol: 'TSLA', company: 'Tesla Inc.', change: '-2.3%' },
  ];

  const sectors = [
    { name: 'Technology', value: '+4.2%' },
    { name: 'Healthcare', value: '+1.1%' },
    { name: 'Finance', value: '+0.8%' },
    { name: 'Energy', value: '-0.4%' },
    { name: 'AI & Semiconductor', value: '+6.7%' },
    { name: 'Crypto', value: '+3.9%' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-yellow-400 selection:text-gray-900">
      {/* HEADER TICKER - Industrial Style */}
      <div className="header border-b border-gray-700">
        <div className="flex gap-12 whitespace-nowrap h-full items-center px-6 overflow-hidden">
          {tickerItems.concat(tickerItems).map((item, i) => (
            <div key={i} className="flex items-center gap-2 border-r border-gray-700 pr-12 last:border-0">
              <span className="font-mono text-gray-500 text-xs tracking-tighter uppercase">Ticker</span>
              <span className="font-bold text-sm tracking-widest">{item.symbol}</span>
              <span className={`text-xs font-mono ${item.price.includes('-') ? 'text-red-500' : 'text-teal-400'}`}>
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      <main className="container py-16 space-y-24">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="home-wrapper">
            <span className="news-tag uppercase tracking-[0.2em]"> Operational</span>
            <h1 className="text-6xl lg:text-8xl font-black text-gray-100 uppercase leading-[0.9] tracking-tighter">
              Market <br /> Intelligence
            </h1>
            <p className="mt-8 text-gray-500 text-lg max-w-lg font-medium leading-relaxed">
              Industrial-grade financial tracking. Real-time data processing across global equity, 
              commodity, and crypto markets with deterministic AI oversight.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="yellow-btn px-10 uppercase tracking-widest">Execute Trade</button>
              <button className="h-12 px-8 border border-gray-600 hover:bg-gray-800 text-gray-400 rounded-lg transition-colors font-medium">
                View Blueprint
              </button>
            </div>
          </div>

          {/* ASSET PREVIEW - Blueprint Style */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gray-700 rounded-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gray-800 border-6 border-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gray-700/50 p-4 border-b border-gray-600 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-end gap-3 mb-8">
                  {[40, 70, 45, 90, 65, 110, 85, 130, 150].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gray-700 hover:bg-yellow-400 transition-colors cursor-crosshair" 
                      style={{ height: `${h}px` }} 
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-700 bg-gray-900/50">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Confidence Index</p>
                    <p className="text-3xl font-bold text-teal-400">94.8%</p>
                  </div>
                  <div className="p-4 border border-gray-700 bg-gray-900/50">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Active Signals</p>
                    <p className="text-3xl font-bold text-gray-100">128</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKET STATS - Flat Grid */}
        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-0 border border-gray-700">
          {stats.map((stat) => (
            <div key={stat.title} className="p-8 border-r border-b border-gray-700 last:border-r-0 hover:bg-gray-800 transition-colors group">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold tracking-tighter mb-4 group-hover:text-yellow-400 transition-colors">{stat.value}</h3>
              <span className={`px-2 py-1 text-[10px] font-bold rounded ${stat.change.includes('-') ? 'bg-red-500/10 text-red-500' : 'bg-teal-400/10 text-teal-400'}`}>
                {stat.change}
              </span>
            </div>
          ))}
        </section>

        {/* PERFORMANCE SPLIT */}
        <section className="grid lg:grid-cols-2 gap-12">
          {/* Top Movers Table */}
          <div className="space-y-6">
            <h3 className="watchlist-title uppercase tracking-widest border-l-4 border-yellow-400 pl-4">Market Movers</h3>
            <div className="watchlist-table">
              <table className="w-full text-left">
                <thead className="table-header-row uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="p-4">Symbol</th>
                    <th className="p-4">Company</th>
                    <th className="p-4 text-right">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {movers.map((stock) => (
                    <tr key={stock.symbol} className="table-row group">
                      <td className="p-4 font-bold text-yellow-400">{stock.symbol}</td>
                      <td className="p-4 text-gray-500 text-sm">{stock.company}</td>
                      <td className={`p-4 text-right font-mono ${stock.change.includes('-') ? 'text-red-500' : 'text-teal-400'}`}>
                        {stock.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Industry Performance */}
          <div className="space-y-6">
            <h3 className="watchlist-title uppercase tracking-widest border-l-4 border-gray-600 pl-4">Sector Analysis</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {sectors.map((sector) => (
                <div key={sector.name} className="p-5 border border-gray-700 bg-gray-800/40 hover:border-gray-500 transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-tighter">{sector.name}</span>
                    <div className={`w-2 h-2 rounded-full ${sector.value.includes('-') ? 'bg-red-500' : 'bg-teal-400'}`}></div>
                  </div>
                  <h4 className="text-2xl font-black mt-4">{sector.value}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI SIGNAL FOOTER - Blueprint Aesthetic */}
        <section className="border-t-2 border-dashed border-gray-700 pt-16">
          <div className="bg-gray-800 p-1 rounded-lg">
            <div className="border border-gray-600 p-12 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="news-tag mb-4">ENGINEERING PREVIEW</div>
                <h2 className="text-4xl font-bold tracking-tighter text-gray-100 uppercase">Automated Sentiment Analysis</h2>
                <p className="text-gray-500 mt-4 leading-relaxed font-medium">
                  Our LLM-orchestrated pipeline scans 40,000+ financial sources per minute to extract 
                  institutional buying signals and retail sentiment shifts.
                </p>
              </div>
              <button className="yellow-btn px-12 whitespace-nowrap uppercase tracking-widest shrink-0">
                Access API
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}