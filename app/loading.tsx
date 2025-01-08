'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.refresh(); // This will trigger a page reload after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="relative flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white border-dotted rounded-full animate-spin"></div>

        {/* Text */}
        <div className="mt-6 text-white text-lg font-semibold animate-bounce">
          Loading...
        </div>

        {/* Glow effect */}
        <div className="absolute w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
      </div>
    </div>
  );
};

export default Loading;
