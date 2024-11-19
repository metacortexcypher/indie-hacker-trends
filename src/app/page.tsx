import NewspaperLayout from '@/components/NewspaperLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NewspaperLayout />
      <div className="text-center mt-8">
        <Link href="/tally-form" className="bg-black text-white font-serif py-2 px-8 hover:bg-gray-800 transition-colors duration-200 border-2 border-black">
          Join the Drama Early
        </Link>
      </div>
    </>
  );
}