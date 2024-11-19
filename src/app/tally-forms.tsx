import React from 'react';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Join the Drama Early',
  };
}

export default function TallyFormPage() {
  return (
    <div className="min-h-screen grid-background">
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Join the Drama Early</h1>
        <p className="text-lg mt-4">
          You are being redirected to our Tally form. Please fill out the form to join the early access list.
        </p>
        <div className="mt-8">
          <iframe
            src="https://tally.so/r/w5l2Qv"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Tally Form"
          />
        </div>
      </div>
    </div>
  );
}