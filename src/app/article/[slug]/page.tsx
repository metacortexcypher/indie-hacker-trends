import React from 'react';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Full Story Coming Soon',
  };
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen grid-background">
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Full Story Coming Soon</h1>
        <p className="text-lg mt-4">
          We are currently working on expanding the content for this article. Please check back later for the full story.
        </p>
      </div>
    </div>
  );
}