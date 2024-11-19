import React from 'react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
}

const ArticleCard = ({ title, excerpt, slug, category, date }: ArticleCardProps) => {
  return (
    <a 
      href={`/article/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:bg-white/50 hover:shadow-lg hover:translate-y-[-4px] hover:border-2 hover:border-orange-100 transition-all duration-300 transition-colors p-4 -mx-4"
    >
      <div className="mb-2 text-sm font-serif uppercase tracking-wider">{category} • {date}</div>
      <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>
      <p className="text-base">{excerpt}</p>
    </a>
  );
};

export default ArticleCard;