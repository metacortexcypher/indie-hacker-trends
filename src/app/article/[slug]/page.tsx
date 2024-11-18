import React from 'react';
import { Metadata } from 'next';

type Article = {
  title: string;
  category: string;
  date: string;
  content: string;
};

type Articles = {
  [key: string]: Article;
};

const articles: Articles = {
  'shipfast-security-scrutiny': {
    title: 'ShipFast Under Fire: Security Concerns Spark Community Debate',
    category: 'Tech Dramas',
    date: 'November 18, 2024',
    content: `In a dramatic turn of events, Marc Lou's highly popular ShipFast boilerplate found itself at the center of a security controversy when a group of ethical hackers publicly demonstrated several critical vulnerabilities in the platform's architecture.The incident unfolded during a routine penetration testing session when security researchers discovered multiple entry points that could potentially expose user data. The findings were initially published on Twitter, causing immediate concern within the indie hacker community.

    INITIAL RESPONSE
    
    Marc Lou's first reaction was notably defensive. "This is a premature disclosure that doesn't take into account our ongoing security improvements," he tweeted within hours of the revelation. The response sparked further debate about responsible disclosure practices in the open-source community.

    TURNING POINT
    
    However, in a remarkable display of leadership and humility, Lou's approach shifted dramatically within 24 hours. In a candid YouTube video titled "We Need to Talk About Security," he openly acknowledged the issues.

    "I was wrong in my initial response," Lou admitted in the video. "The security of our users' data is paramount, and I'm grateful to the security researchers who brought these issues to light. This is a wake-up call for all of us in the indie hacker community."

    IMMEDIATE ACTION
    
    Following the incident, Lou announced several significant changes:
    • Hiring of two senior security engineers
    • Implementation of a bug bounty program
    • Complete security audit of all ShipFast components
    • Weekly security transparency reports

    COMMUNITY REACTION
    
    The indie hacker community's response to Lou's handling of the crisis has been overwhelmingly positive. "This is how you turn a crisis into an opportunity," noted one prominent community member. "Marc's response should be a case study in community leadership."

    The incident has sparked a broader conversation about security practices in the indie hacker community, with many calling for improved security standards in starter templates and boilerplates.`
  },
  'producthunt-transparency-crisis': {
    title: "Product Hunt's Algorithm Faces Mounting Criticism",
    category: 'Founder Dramas',
    date: 'November 18, 2024',
    content: `The indie maker community is in turmoil as frustrations with Product Hunt's featuring algorithm reach a boiling point. Makers across the ecosystem are reporting increasingly inconsistent results, raising questions about the platform's selection process and potential bias.

    GROWING CONCERNS
    
    Multiple high-profile launches have failed to gain traction despite significant community support and upvotes. This has led to widespread speculation about the platform's featuring criteria and potential preferential treatment for certain products.

    "My product received over 500 upvotes in the first few hours but never made it to the featured section," reports one indie maker who wished to remain anonymous. "Meanwhile, I've noticed YC-backed products consistently featured with fewer upvotes."

    THE YC QUESTION
    
    Data analysis by community members suggests a potential pattern:
    • 78% of YC-backed products achieved featured status
    • Only 23% of independent products with similar metrics received the same treatment
    • Featured YC products averaged 30% fewer upvotes than non-featured independent products

    COMMUNITY RESPONSE
    
    The situation has catalyzed several community initiatives:
    • Development of alternative launch platforms
    • Creation of community-curated product directories
    • Calls for an open-source launch platform

    DEMANDS FOR CHANGE
    
    The community has outlined several key demands:
    1. Transparent featuring criteria
    2. Clear algorithm documentation
    3. Equal consideration for independent products
    4. Community involvement in the featuring process

    LOOKING AHEAD
    
    Several community leaders have announced plans to develop alternative platforms. "We need a solution that puts the community first," says one prominent indie hacker. "The era of black-box algorithms needs to end."

    As pressure mounts, the indie hacker community awaits Product Hunt's response to these growing concerns. Meanwhile, the search for alternatives continues to gain momentum.`
  }
};

// Function to get async params
async function getParams(params: { slug: string }) {
  return params;
}

// Function to fetch article data
async function getArticle(slug: string): Promise<Article | null> {
  return articles[slug] || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await getParams(params);
  const article = await getArticle(resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.content.substring(0, 160),
  };
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

// Article Page Component
export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const resolvedParams = await getParams(params);
  const article = await getArticle(resolvedParams.slug);

  if (!article) {
    return (
      <div className="min-h-screen grid-background">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Article Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid-background">
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Category and Date */}
        <div className="text-sm font-serif uppercase tracking-wider mb-6">
          {article.category} • {article.date}
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t-2 border-black">
          <p className="text-sm font-serif text-center">
            IndieHacker Trends • The Distinguished Bootstrapper Daily Edition
          </p>
        </div>
      </article>
    </div>
  );
}