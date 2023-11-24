import Banner from '@/components/banner.client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
      </main>
    </div>
  );
}
