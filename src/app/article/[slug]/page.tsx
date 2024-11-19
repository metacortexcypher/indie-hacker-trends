import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import myImage from '/public/waitlistmeme.jpg';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Full Story Coming Soon',
  };
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen grid-background">
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Oops! Still building this. Indie struggles, you know.</h1>
        <p className="text-lg mt-4">
          We are currently working on expanding the content for this article. Please check back later for the full story.
        </p>
        <br />
        <p>Patience is a virtue. We are indie hackers, not magicians.</p>
        <br />
        <br />
        <div className="my-8">
          <Image
            src={myImage}
            alt="Image description"
            width={800}
            height={450}
            priority
          />
        </div>
        
      </div>
    </div>
  );
}