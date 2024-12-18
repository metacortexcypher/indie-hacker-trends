import React from 'react';
import ArticleCard from './ArticleCard';
import Image from 'next/image';
import InterestCaptureForm from './InterestCaptureForm';

// Mock articles data
const articles = [
  {
    slug: 'shipfast-security-scrutiny',
    title: 'ShipFast Under Fire: Security Concerns Spark Community Debate',
    excerpt: 'Marc Lous popular ShipFast boilerplate faces intense scrutiny after hackers publicly expose security vulnerabilities. Community leaders call for immediate action.',
    category: 'Tech Dramas',
    date: 'November 18, 2024'
  },
  {
    slug: 'producthunt-transparency-crisis',
    title: 'Product Hunts Algorithm Faces Mounting Criticism',
    excerpt: 'Indie makers demand transparency as concerns grow over featured product selection process. YC favoritism allegations surface amid community unrest.',
    category: 'Founder Dramas',
    date: 'November 18, 2024'
  }
];


const WantedPoster = () => (
    <div className="border-4 border-black p-6 bg-[#f4e4bc] text-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="border-b-2 border-black pb-2 mb-4">
        <h4 className="text-xl font-bold">WANTED</h4>
        <p className="text-sm">FOUNDER OF THE WEEK</p>
      </div>
      <div className="w-32 h-32 mx-auto mb-4 border-2 border-black bg-white overflow-hidden">
        <Image
          src="/marc.jpg" // Path to your image in public folder
          alt="Founder of the week"
          width={128}
          height={128}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <h5 className="text-lg font-bold mb-2">Marc Lou</h5>
      <p className="text-sm mb-4">Wanted for: Handling Crisis Like a Pro</p>
      <div className="text-xs">
        REWARD: ONE SECURITY AUDIT
      </div>
    </div>
  );

const NewspaperLayout = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Masthead */}
      <header className="text-center mb-8">
        <h5 className="newspaper-brand-name mb-4">
          TheIndieJuice
        </h5>
        <h2 className="newspaper-heading mb-4">Because Youre Too Busy Pivoting to Keep Up</h2>
        <div className="newspaper-subheading mb-6">
          VOLUME NO. 1 • TRENDS INCLUDED, FUNDING NOT • EST. 2024
        </div>
      </header>

      {/* Navigation */}
      <nav className="mb-8">
        <div className="divider-line" />
        <div className="py-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-serif">
          <span className="tooltip-wrapper">
          <span className="tooltip-content">Coming soon-ish... (maybe)</span>
            <a href="#tech" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
            TECH DRAMAS
            </a>
          </span>
          <span className="tooltip-wrapper"> 
          <span className="tooltip-content" style={{left: 0, top: 0}}>We are prioritizing vibes over functionality right now.</span>
            <a href="#founder" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
            FOUNDER TALES
            </a>
          </span>
          <span className="tooltip-wrapper">
          <span className="tooltip-content">Feature in progress. We are bootstrapping, okay?</span>
            <a href="#community" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
            COMMUNITY NEWS
            </a>
          </span>
          <span className="tooltip-wrapper">
          <span className="tooltip-content">Click harder, maybe it will work</span>
            <a href="#analysis" className="hover:bg-black hover:text-white px-2 py-1 transition-colors">
            DEEP ANALYSIS
            </a>
          </span>
        </div>
        <div className="divider-line" />
      </nav>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Column */}
        <div className="md:col-span-8">
          {/* Featured Articles */}
          <div className="space-y-12">
            
            {articles.map(article => (
              <ArticleCard key={article.slug} {...article} />
            ))}
            
          </div>
          <InterestCaptureForm />
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-4 space-y-8">
          {/* Market Telegraphs */}
          <div className="market-section">
            <h3 className="text-2xl font-bold mb-4">
              Indie Highlights
            </h3>
            <div className="divider-line" />
            <ul className="market-list">
            <li>• <span className="red">Alex (@aliszu)</span>, founder of Uncoverlab, got her wisdom tooth removed. Speculation is going on that she is not the same person anymore</li>
              <li>•<span className='green'>Sandra djajic (@TakoTreba)</span>  broke up with Klu.so for unknown reasons. So whats next for her? </li>
              <li>•<span className="blue">Janu (@janubuilds)</span> , who once was a secret detective, is now building products and offering MVP services. </li>
            </ul>
          </div>

          {/* Wanted Poster */}
          <WantedPoster />
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-4 border-t-2 border-black">
        <p className="text-center text-sm font-serif">
          Est. 2024 • All Rights Not at all Reserved <br /> Made by a memefied human ❤️ 
        </p>
      </footer>
    </div>
  );
};

export default NewspaperLayout;