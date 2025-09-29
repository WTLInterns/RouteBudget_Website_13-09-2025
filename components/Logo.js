'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center">
        <div className="h-8 w-8 bg-gray-300 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Image 
        src="/images/RouteBudget_New_logo.png"
        alt="RouteBudget Logo" 
        width={32} 
        height={32}
        className="h-12 w-20"
        priority
      />
    </div>
  );
};

export default Logo;