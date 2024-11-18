import React from 'react';

const VintageBooklets = () => {
  return (
    <div className="min-h-screen bg-[#f4e6c7]">
      {/* Paper texture */}
      <div className="texture-overlay" />
      
      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="grid grid-cols-3 mb-12">
          <div>
            <h2 className="font-serif uppercase tracking-widest">HISTORY</h2>
          </div>
          
          <div className="text-center">
            <h1 className="ornate-title mb-2">OUR BOOKLETS</h1>
            <p className="font-serif italic">FOR THE DISTINGUISHED READER</p>
            <p className="mt-4 text-sm font-serif">THE PARTICULARE WEALTHY DUNDER HEAD</p>
          </div>
          
          <div className="text-right">
            <h2 className="font-serif uppercase tracking-widest">PURCHASE</h2>
            <p className="mt-2">BUY! BUY! BUY!</p>
            <button className="mt-4 bg-black text-white px-4 py-2 text-sm uppercase">
              Visit Storefront
            </button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book 1 */}
          <div className="vintage-card">
            <div className="text-center">
              <p className="text-sm uppercase mb-4">BY MATT WIESLY</p>
              <h2 className="text-2xl font-bold mb-2">DR OCTAVIUS WATT</h2>
              <p className="italic mb-4">AND HIS PNEUMATIC BRIDE</p>
              <p className="text-sm mt-8 border-t border-black pt-4">
                VOL. ONE.............$2.99
              </p>
            </div>
          </div>

          {/* Book 2 */}
          <div className="vintage-card">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">JONAH OAKTREE</h2>
              <p className="italic mb-4">A TALE OF BOOTSTRAP & PECULIARITY</p>
              <p className="text-sm mt-8 border-t border-black pt-4">
                VOL. TWO.............$2.99
              </p>
            </div>
          </div>

          {/* Featured Item */}
          <div className="vintage-card">
            <div className="text-center">
              <h3 className="text-xl uppercase mb-4">Featured Item</h3>
              <p className="text-sm">The Octavius Collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VintageBooklets;